---
title: 'Tensors: Hình học và Ứng dụng - P1.1 - Giới thiệu - Đại số đa tuyến tính'
published: 2026-02-12
description: Ngó một chút về đại số đa tuyến tính
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra, Rank, Linear Map, Hạng, Bilinear Map]
category: Tensor
toc: true
draft: false
---

## Ánh xạ tuyến tính
### Không gian vector
Ký hiệu $\Bbb{C}^n$ là không gian vector các bộ $n$ số phức, tức là mỗi vector $\bm{v}$ trong $\Bbb{C}^n$ được viết dưới dạng $\bm{v}=(v_1,\ldots, v_n)$, với $v_j\in\Bbb{C}$.

Cấu trúc không gian vector của $\Bbb{C}^n$:
- Phép cộng: $\bm{v}+\bm{w} \in \Bbb{C}^n$, với mọi $\bm{v}, \bm{w} \in \Bbb{C}^n$, 
- Phép nhân với vô hướng: $\lambda\bm{v}\in\Bbb{C}^n$ với mọi $\bm{v} \in \Bbb{C}^n$ và $\lambda\in\Bbb{C}$. </br>
<span style="color:#6b7280;">Phép cộng và phép nhân với vô hướng ở đây thực hiện theo từng toạ độ.</span>


### Ánh xạ tuyến tính
Một ánh xạ $f:\Bbb{C}^n\to \Bbb{C}^m$ được gọi là <span style="color:#ff6e40;"><em>tuyến tính </em></span> nếu
- $f(\bm{v}+\bm{w})=f(\bm{v})+f(\bm{w})$ với mọi $\bm{v}, \bm{w} \in \Bbb{C}^n$,
- $f(\lambda\bm{v})=\lambda f(\bm{v})$ với mọi $\bm{v} \in \Bbb{C}^n$ và $\lambda\in\Bbb{C}$.

### Không gian vector đối ngẫu
Cho $V$ là một không gian vector. Ký hiệu
$$
V^* \coloneqq \left\lbrace f: V\to \Bbb{C} \mid f \text{ tuyến tính} \right\rbrace
$$
là <span style="color:#ff6e40;"><em>không gian vector đối ngẫu </em></span> của $V$.

Với $\alpha \in V^*$ và $\bm{w}\in W$, ta có thể dịnh nghĩa một ánh xạ tuyến tính cho bởi
$$
\alpha \otimes \bm{w}: V\to W,\qquad \bm{v} \mapsto \alpha(\bm{v})\bm{w}.
$$

Ánh xạ tuyến tính như vậy có <span style="color:#ff6e40;"><em>hạng-1</em></span>.

<span style="color:#ff6e40;"><em>Hạng</em></span> của một ánh xạ tuyến tính $f:V\to W$ là số $R$ nhỏ nhất sao cho tồn tại $\alpha_1,\ldots,\alpha_R \in V^*$ và $\bm{W}_1,\ldots,\bm{w}_R\in W$ sao cho $f=\sum_{r=1}^R \alpha_r\otimes \bm{w}_r$.


:::hint[<span style="color:#12a4d9;"> **Hạng của một ánh xạ tuyến tính** </span>]
Các định nghĩa sau đây về hạng của ánh xạ tuyến tính $f:V \to W$ là tương đương:
1. $\dim W$.
2. $\dim V - \dim (\ker f)$.
3. Số $R$ nhỏ nhất sao cho $f$ là tổng của $R$ ánh xạ tuyến tính hạng-1.</li>
4. Số $R$ nhỏ nhất sao cho mọi ma trận biểu diễn $f$ có định thức con cấp $R+1$ đều bằng $0$. </li>
5. Tồn tại các cách chọn cơ sở trong $V$ và $W$ sao cho ma trận của $f$ có dạng 
$$
\begin{bmatrix}
\bm{I}_R & 0\\
0 &0
\end{bmatrix}.
$$
:::


## Ánh xạ song tuyến tính
Ánh xạ $f:A\times B \to C$ được gọi là <span style="color:#ff6e40;"><em>song tuyến tính</em></span> nếu với mỗi phần tử cố định $\bm{b}\in B$, ánh xạ $f(\cdot,\bm{b}):A\to C$ tuyến tính và tương tự cho mỗi phần tử cố định của $A$.

:::hint[<span style="color:#12a4d9;"> **Phép nhân ma trận là một ánh xạ song tuyến tính** </span>]
Phép nhân các ma trận vuông là một ánh xạ song tuyến tính:
$$
    f:\Bbb{C}^{n\times n} \times \Bbb C^{n\times n} \to \Bbb C^{n\times n}
$$
Nếu ta cố định một thành phần thì ánh xạ này tuyến tính theo thành phần còn lại, cụ thể $(\lambda_1\bm{A}_1+\lambda_2\bm{A}_2)\bm{B}=\lambda_1\bm{A}_1\bm{B}+\lambda_2\bm{A}_2\bm{B}$.
:::

:::hint[<span style="color:#12a4d9;"> **Ví dụ ánh xạ song tuyến tính** </span>]
Với $\alpha \in A^*$, $\beta \in B^*$ và $c\in C$, ánh xạ
$$
    \alpha\otimes \beta \otimes c: A\times B \to C,\qquad (\bm{a},\bm{b})\mapsto \alpha(\bm{a})\beta(\bm{b})\bm{c}
$$
là một ánh xạ song tuyến tính.
:::

Với một ánh xạ song tuyến tính $\mathcal{T}: A\times B \to C$, ta có thể biểu diễn nó dưới dạng tổng
<div id="eq-rank1"></div>

$$
    \mathcal{T}(\bm{a},\bm{b})=\sum_{r=1}^R\alpha^r(\bm{a})\beta^r(\bm{b})\bm{c}_r,
    \tag{1.1.1}
$$
trong đó $\alpha^r\in A^*, \beta\in B^*$ và $\bm{c}_r\in C$.

Số $R$ nhỏ nhất trong tất cả các biểu diễn ở [(1.1.1)](#eq-rank1) được gọi là <span style="color:#ff6e40;"><em>hạng</em></span> của $\cal T$ và được ký hiệu bởi $\mathrm{rank}\ \cal T$.

:::hint[<span style="color:#12a4d9;"> **Khác biệt giữa ánh xạ tuyến tính và song tuyến tính** </span>]
Với ánh xạ tuyến tính $f:A\to B$ thì "rank = rank hàng = rank cột", tức là $\mathrm{rank}\; f=\dim f(A) = \dim f^\top (B^*)$, và $\mathrm{rank}\; f \leq \min\{\dim A, \dim B\}$. Với "hầu hết" các ánh xạ tuyến tính đều đạt được rank cực đại</br>
<span style="color:#6b7280;"> hầu hết ở đây hiểu theo nghĩa là nằm trong một tập mở Zariski.</span>

Đối với ánh xạ song tuyến tính $f:A\times B\to C$ thì rank của $f$ nói chung lớn hơn $\max\{\dim A, \dim B, \dim C\}$ và "hầu hết" các ánh xạ song tuyến tính thì không đạt được rank tối đa.
:::

## Hạng và hạng biên
### Hạng đối xứng
Cho $P$ là một đa thức thuần nhất $n$ biến bậc $d$. Ta luôn có thể viết $P$ dưới dạng tổng của các luỹ thừa bậc $d$.
:::hint[<span style="color:#12a4d9;"> **Đa thức bậc hai** </span>]
Đa thức bậc hai $p(x)=ax^2+bx+c$ luôn có thể được viết dưới dạng $(\alpha x+\beta)^2 + (\gamma x + \delta)^2$. Hơn nữa ta có thể đưa một đa thức về dạng thuần nhất, bằng cách thêm một biến mới $y$. Nếu bậc cao nhất của các đơn thức xuất hiện trong một đa thức là $d$, thì ta nhân mỗi đơn thức trong biểu thức với một lũy thừa thích hợp của $y$ sao cho đơn thức đó có bậc bằng $d$. Chẳng hạn, $p(x,y)=(\alpha x+\beta y)^2 + (\gamma x + \delta y)^2$.
:::

<span style="color:#ff6340;"><em>Hạng đối xứng</em></span> của một đa thức thuần nhất $P$, ký hiệu $\mathrm{srank}\; P$, là số $R$ nhỏ nhất sao cho $P$ được biểu diễn thành tổng của $R$ luỹ thừa bậc $d$.

### Hạng biên
:::hint[<span style="color:#12a4d9;"> **Đa thức bậc ba** </span>]
Một đa thức thuần nhất hai biến bậc ba tổng quát có thể được viết dưới dạng tổng của hai lập phương, nhưng không phải mọi đa thức bậc ba đều là một lập phương hoặc là tổng của hai lập phương.

Ví dụ, $P=x^3+3x^2y$. Rõ ràng $P$ không là tổng của hai lập phương (không tìm được các số $s,t,u,v$ sao cho $P=(sx+ty)^3+(ux+vy)^3$). Tuy nhiên $P$ là giới hạn của các đa thức $P_\epsilon$ khi $\epsilon \to 0$, trong đó $P_\epsilon$ được viết thành tổng của hai lập phương
$$
P_\epsilon \coloneqq \frac{1}{\epsilon}\big((\epsilon-1)x^3+(x+\epsilon y)^3\big)
$$
(by Terracini).
:::

<span style="color:#ff6340;"><em>Hạng biên đối xứng</em></span> của một đa thức thuần nhất $P$, ký hiệu $\underline{\mathrm{srank}}\;P$, là số $R$ nhỏ nhất sao cho tồn tại một dãy các đa thức $P_\epsilon$ có hạng $R$ thoả mãn $P$ là giới hạn của $P_\epsilon$ khi $\epsilon \to 0$.

<span style="color:#ff6340;"><em>Hạng biên</em></span> của một ánh xạ song tuyến tính $\mathcal{T}:A\times B\to C$, ký hiệu $\underline{\mathrm{rank}}\ \cal T$, là số $R$ nhỏ nhất sao cho tồn tại một dãy các ánh xạ song tuyến tính $\cal T_\epsilon$ có hạng $R$ thoả mãn $\cal T$ là giới hạn của $\cal T_\epsilon$ khi $\epsilon \to 0$.

:::hint[<span style="color:#12a4d9;"> **Hạng biên của đa thức bậc ba** </span>]
Đa thức $P=x^3+3x^y$ ở trên có hạng biên đối xứng $2$ và hạng đối xứng $3$.
:::


## Không gian các tensor và các đa tạp bên trong chúng
Ký hiệu $A^*\otimes B$ là không gian vector các ánh xạ tuyến tính $A\to B$. Tập hợp các ánh xạ tuyến tính có hạng không quá $r$ được ký hiệu bởi $\hat \sigma_r = \hat \sigma_{r, A^*\otimes B}$. Đây là tập nghiệm của họ các đa thức thuần nhất trên không gian vector $A^*\otimes B$. Cụ thể, nếu ta chọn các cơ sở và đồng nhất $A^*\otimes B$ với không gian các ma trận $\dim A \times \dim B$, thì $\hat \sigma_r$ là tập hợp các ma trận có các định thức con kích thước $(r+1)\times (r+1)$ bằng $0$. Điều này nghĩa là luôn có một cách để test liệu một ánh xạ tuyến tính có hạng tối đa $r$ hay không.

Một tập con của một không gian vector được xác định bởi tập nghiệm của một họ các đa thức thuần nhất được gọi là một <span style="color:#ff6340;"><em>đa tạp đại số</em></span>.

Ký hiệu $A^*\otimes B^* \otimes C$ là không gian vector các ánh xạ song tuyến tính $A\times B \to C$. Đây là ví dụ đầu tiên của một không gian các <span style="color:#ff6340;"><em>tensor</em></span>. Biễu diễn trong cơ sở tương ứng, một ánh xạ song tuyến tính là một "ma trận 3-chiều" hay còn gọi là mảng (array).

Tập hợp các ánh xạ song tuyến tính có hạng không vượt $r$ lại KHÔNG phải một đa tạp đại số. Tuy nhiên tập hợp các ánh xạ song tuyến tính có hạng biên không quá $r$ là một đa tạp đại số. Tập hợp các ánh xạ song tuyến tính $f:A\times B\to C$ với hạng biên không quá $r$ được ký hiệu bởi $\hat \sigma_r = \hat \sigma_{r,A^*\otimes B^*\otimes C}$. Đây là tập nghiệm của một họ các đa thức thuần nhất trên không gian vector $A^*\otimes B^*\otimes C$.

Về nguyên tắc, để test một ánh xạ song tuyến tính $\cal T$ có thuộc vào $\hat \sigma_r$ hay không, ta có thể tính giá trị của các đa thức xác định $\hat \sigma_r$ tại $\cal T$ và kiểm tra xem chúng có bằng $0$ hay không. Tuy nhiên, khác với ánh xạ tuyến tính, việc tính các đa thức xác định $\hat \sigma_{r, A^*\otimes B^* \otimes C}$ nói chung còn để mở.

Tổng quát, với các không gian vector $A_1,\ldots,A_n$, ta có thể xét các <span style="color:#ff6340;"><em>ánh xạ đa tuyến tính</em></span> $A_1\times \cdots \times A_n\to\Bbb C$. Tập hợp các ánh xạ đa tuyến tính này lập thành một không gian vector. Đây là một không gian các tensor và được ký hiệu bởi $A_1^*\otimes \cdots\otimes A_n^*$. Hạng của mỗi phần tử trong $A_1^*\otimes \cdots\otimes A_n^*$ được định nghĩa tương tự như ánh xạ song tuyến tính. Trong các cơ sở tương ứng, đây là tập hợp các mảng $\dim A_1 \times \cdots\times \dim A_n$ chiều.