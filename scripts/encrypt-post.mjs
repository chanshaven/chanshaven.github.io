import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { webcrypto as crypto } from "node:crypto";

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
    console.error("Usage:");
    console.error("node scripts/encrypt-post.mjs <private-draft.md> <public-post.mdx>");
    process.exit(1);
}

function toBase64(bytes) {
    return Buffer.from(bytes).toString("base64");
}

function askHidden(question) {
    return new Promise((resolve) => {
        const stdin = process.stdin;
        const stdout = process.stdout;

        let value = "";
        stdout.write(question);

        stdin.setRawMode?.(true);
        stdin.resume();
        stdin.setEncoding("utf8");

        function onData(char) {
            if (char === "\n" || char === "\r" || char === "\u0004") {
                stdout.write("\n");
                stdin.setRawMode?.(false);
                stdin.pause();
                stdin.removeListener("data", onData);
                resolve(value);
                return;
            }

            if (char === "\u0003") {
                process.exit();
            }

            if (char === "\u007f") {
                if (value.length > 0) {
                    value = value.slice(0, -1);
                    stdout.write("\b \b");
                }
                return;
            }

            value += char;
            stdout.write("*");
        }

        stdin.on("data", onData);
    });
}

function splitFrontmatter(raw) {
    if (!raw.startsWith("---")) {
        return {
            frontmatter: `---
title: "Nơi này chỉ có Sâu mới được vào thôi"
published: ${new Date().toISOString().slice(0, 10)}
description: "Nhập mật khẩu của chúng ta nhé!"
category: "Chúng ta"
tags: ["Chúng ta"]
draft: false
---`,
            body: raw,
        };
    }

    const end = raw.indexOf("\n---", 3);
    if (end === -1) {
        throw new Error("Frontmatter không hợp lệ.");
    }

    const frontmatter = raw.slice(0, end + 4).trim();
    const body = raw.slice(end + 4).trim();

    return { frontmatter, body };
}

async function deriveKey(password, salt, iterations) {
    const passwordKey = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(password),
        "PBKDF2",
        false,
        ["deriveKey"]
    );

    return crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt,
            iterations,
            hash: "SHA-256",
        },
        passwordKey,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt"]
    );
}

const password = await askHidden("Password: ");
const confirmPassword = await askHidden("Confirm password: ");

if (password !== confirmPassword) {
    console.error("Hai mật khẩu không giống nhau.");
    process.exit(1);
}

if (password.length < 10) {
    console.error("Password nên dài ít nhất 10 ký tự.");
    process.exit(1);
}

const raw = await readFile(inputPath, "utf8");
const { frontmatter, body } = splitFrontmatter(raw);

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const iterations = 250000;

const key = await deriveKey(password, salt, iterations);

const encrypted = new Uint8Array(
    await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        new TextEncoder().encode(body)
    )
);

const envelope = {
    v: 1,
    kdf: "PBKDF2",
    hash: "SHA-256",
    iterations,
    salt: toBase64(salt),
    iv: toBase64(iv),
    data: toBase64(encrypted),
};

const payload = Buffer.from(JSON.stringify(envelope), "utf8").toString("base64");

const output = `${frontmatter}

import EncryptedPost from "@components/EncryptedPost.astro";

<EncryptedPost payload="${payload}" />
`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, output, "utf8");

console.log(`Encrypted post created: ${outputPath}`);