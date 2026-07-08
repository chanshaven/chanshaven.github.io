export function HintComponent(node, children) {
    // remark-directive thường đẩy title vào `node.properties.title`
    // với syntax :::hint[Title]
    const title =
        node?.properties?.title ||
        node?.data?.title ||
        "Hint";

    const open = node?.properties?.open === true || node?.properties?.open === "true";

    return {
        type: "element",
        tagName: "details",
        properties: {
            className: ["hint"],
            ...(open ? { open: true } : {}),
        },
        children: [
            {
                type: "element",
                tagName: "summary",
                properties: { className: ["hint-summary"] },
                children: [{ type: "text", value: title }],
            },
            {
                type: "element",
                tagName: "div",
                properties: { className: ["hint-body"] },
                children,
            },
        ],
    };
}