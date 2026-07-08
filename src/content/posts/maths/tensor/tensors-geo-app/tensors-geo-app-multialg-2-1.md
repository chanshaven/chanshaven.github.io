---
title: 'Tensors: Hình học và Ứng dụng - P2.1 - Đại số đa tuyến tính - Nhắc lại về đại số tuyến tính, nhóm và biểu diễn'
published: 2026-02-14
updated: 2026-03-01
description: Một số kết quả trong đại số tuyến tính
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra, Tensor Decomposition, Phân rã tensor]
category: Tensor
toc: true
draft: false
---

## Ánh xạ tuyến tính
### Ánh xạ tuyến tính hạng-1

Với $\alpha \in V^*$, đặt 
$$
\alpha^\perp \coloneqq \{ \bm{v} \in V \mid \alpha(\bm{v}) = 0 \},
$$
và với $\bm{w} \in V$, ký hiệu $\langle \bm{w} \rangle$ là không gian con sinh bởi $\bm{w}$.

Cho $\alpha \in V^*$ và $w \in W$. Ánh xạ tuyến tính
$$
\alpha \otimes w : V \to W, \qquad \bm{v} \mapsto \alpha(\bm{v}) \bm{w}
$$
được gọi là <span style="color:#ff6e40;"><em>hạng-1</em></span>.

:::hint[<span style="color:#12a4d9;"> **Tính chất** </span>]
Nhận xét rằng
$$
\ker(\alpha \otimes \bm{w}) = \alpha^\perp, 
\qquad 
\operatorname{im}(\alpha \otimes \bm{w}) = \langle \bm{w} \rangle.
$$

- Nếu chọn các cơ sở của $V$ và $W$, thì ma trận biểu diễn $\alpha \otimes \bm{w}$ có hạng bằng một.

- Mọi ma trận $n \times m$ hạng-1 đều là tích
của một vectơ cột với một vectơ hàng.

- Một ma trận khác không có hạng một khi và chỉ khi
mọi định thức con $2 \times 2$ của nó đều bằng $0$.
:::

### Annihilator
Cho $U \subset V$ là một không gian con tuyến tính. 
Định nghĩa $U^\perp \subset V^*$, gọi là <span style="color:#ff6e40;"><em>không gian triệt tiêu</em></span>
(annihilator) của $U$, bởi
$$
U^\perp := \{ \alpha \in V^* \mid \alpha(\bm{u}) = 0 \;\; \forall \bm{u} \in U \}.
$$
Khi đó
$
(U^\perp)^\perp = U.
$

Với một ánh xạ tuyến tính $f : V \to W$, ta luôn có
$$
\ker f = (\operatorname{im} f^T)^\perp.
$$
<span style="color:#ff6e40;"><em>Ánh xạ chuyển vị</em></span> $f^T : W^* \to V^*$, hay còn được gọi là <span style="color:#ff6e40;"><em>ánh xạ kề</em></span> của $f:V\to W$, 
 được định nghĩa bởi $\beta \mapsto (\bm{v}\mapsto \beta(f(\bm{v})))$.

Đây có thể xem là *định lý cơ bản của đại số tuyến tính*. 
Hệ quả là
$
\operatorname{rank}(f) = \operatorname{rank}(f^T),
$
tức là đối với một ma trận, hạng dòng bằng hạng cột.

### Tổng trực tiếp
Một không gian vectơ $V$ có một phân tích tổng trực tiếp
$
V = U \oplus W
$
nếu $U, W \subset V$ là các không gian con tuyến tính và với mọi 
$\bm{v} \in V$ tồn tại duy nhất $\bm{u} \in U$ và $\bm{w} \in W$ sao cho
$
\bm v = \bm u + \bm w.
$

Điều kiện cần và đủ để có phân tích tổng trực tiếp
$
V = U \oplus W
$
là
- $
\dim U + \dim W \ge \dim V
\quad \text{và} \quad
U \cap W = \{0\}.
$
- $
\dim U + \dim W \le \dim V
\quad \text{và} \quad
\operatorname{span}\{U, W\} = V.
$

:::hint[]
Gọi $\cal S^2 \mathbb{C}^n$ là không gian các ma trận đối xứng
$n \times n$.
Gọi $\Lambda^2 \mathbb{C}^n$ là không gian các ma trận phản đối xứng
(skew-symmetric) $n \times n$. Ta có một phân tích tổng trực tiếp
$$
\mathrm{Mat}_{n \times n}
=
S^2(\mathbb{C}^n)
\oplus
\Lambda^2(\mathbb{C}^n).
$$
:::

### Không gian vector đối ngẫu
Cho $\bm v_1, \dots, \bm v_n$ là một cơ sở của $V$, và định nghĩa
$\alpha_i \in V^*$ bởi
$
\alpha_i(\bm v_j) = \delta_{ji}.
$
<span style="color:#6b7280;">Một ánh xạ tuyến tính được xác định duy nhất
bởi ảnh của một cơ sở.</span>


Khi đó $\alpha_1, \dots, \alpha_n$ tạo thành một cơ sở của $V^*$,
gọi là <span style="color:#ff6e40;"><em>cơ sở đối ngẫu</em></span> của $\bm v_1, \dots, \bm v_n$.
Do đó 
$
\dim V^* = n.
$

<!-- Khi cố định một cơ sở của $V$,
ta thu được một sự đồng nhất giữa nhóm các tự đẳng cấu khả nghịch của $V$,
ký hiệu $\mathrm{GL}(V)$, và tập hợp các cơ sở của $V$. -->

## Nhóm và biểu diễn

Chúng ta là khai thác tính đối xứng để hiểu rõ hơn về tensor. Tập hợp các đối xứng của một đối tượng
bất kỳ tạo thành một *nhóm*, và việc hiện thực hóa (realization) một nhóm như một nhóm các đối xứng được gọi là một *biểu diễn* (representation) của nhóm đó.

$
\mathrm{GL}(V),
$
nhóm các ánh xạ tuyến tính khả nghịch $V \to V$, tạo thành một nhóm
dưới phép hợp thành ánh xạ.

### Nhóm $\mathrm{GL}(V)$

Nếu ta cố định một cơ sở chuẩn, thì $\mathrm{GL}(V)$ chính là nhóm
các phép đổi cơ sở của $V$.

Nếu dùng cơ sở chuẩn đó để đồng nhất $V$ ($n$-chiều) với $\mathbb{C}^{n}$
(trang bị cơ sở tiêu chuẩn của nó), thì $\mathrm{GL}(V)$ có thể
được đồng nhất với tập hợp các ma trận khả nghịch kích thước
$n \times n$.

Ta có thể viết $\mathrm{GL}(V) = \mathrm{GL}_n$ hoặc $\mathrm{GL}_n(\mathbb{C})$
khi $V$ là không gian $n$ chiều và được trang bị một cơ sở.

Ta nhấn mạnh $\mathrm{GL}(V)$ như một *nhóm* thay vì chỉ là tập
các ma trận khả nghịch $n \times n$, bởi vì nó không chỉ tác động
lên $V$, mà còn lên nhiều không gian khác được xây dựng từ $V$.

Cho $W$ là một không gian vectơ, $G$ là một nhóm, và
$
\rho : G \longrightarrow \mathrm{GL}(W)
$
là một <span style="color:#ff6e40;"><em>đồng cấu nhóm</em></span>.
(Khi đó $\rho(G)$ là một nhóm con của $\mathrm{GL}(W)$.)

Một đồng cấu nhóm
$
\rho : G \longrightarrow \mathrm{GL}(W)
$
được gọi là một <span style="color:#ff6e40;"><em>biểu diễn tuyến tính</em></span> của $G$.
Ta nói rằng $G$ <span style="color:#ff6e40;"><em>tác động</em></span> (acts) lên $W$, hoặc rằng $W$ là một
$G$-<span style="color:#ff6e40;"><em>môđun</em></span> ($G$-module).


Với $g \in \mathrm{GL}(V)$ và $\bm v \in V$, ký hiệu
$g \cdot \bm v$ hoặc $ g(\bm v)$
cho tác động đó.

:::hint[**Ví dụ**]
$g\in \mathrm{GL}(V)$ tác động lên
1. $V^*$ bởi $\alpha \mapsto \alpha \circ g^{-1}$.
2. $\operatorname{End}(V)$ bởi $f\mapsto g \circ f$ hoặc bởi $f\mapsto g \circ f \circ g^{-1}$
3. $\mathcal S^d V^*$ bởi $P \mapsto g\cdot P$, trong đó $g\cdot P(\bm{v}) = P(g^{-1}\bm{v})$ và $\mathcal S^d V^*$ là không gian các đa thức thuần nhất bậc $d$ trên $V$.

Các ví dụ này cho ta các đồng cấu nhóm
$
\mathrm{GL}(V) \to \mathrm{GL}(V^*), \;
\mathrm{GL}(V) \to \mathrm{GL}(\mathrm{End}(V)) 
$
và
$
\mathrm{GL}(V) \to \mathrm{GL}(\mathcal S^d V^*)
$.
:::

### Mô-đun và mô-đun con
Nếu $W$ là một $G$-môđun và tồn tại một không gian con tuyến tính
$U \subset W$ sao cho
$g \cdot \bm u \in U$ với mọi  $g \in G$ và $\bm  u \in U$,
thì ta nói $U$ là một $G$-<span style="color:#ff6e40;"><em>mô-đun con</em></span> ($G$-submodule) của $W$.

Một môđun được gọi là <span style="color:#ff6e40;"><em>bất khả quy</em></span> (irreducible) nếu nó không
chứa môđun con khác $0$ nào ngoài chính nó.

Nếu $Z \subset W$ là một tập con và nhóm $G$ tác động lên $W$,
ta nói $Z$ là <span style="color:#ff6e40;"><em>bất biến</em></span> dưới tác động của $G$ nếu
$g \cdot \bm z \in Z$
với mọi $\bm z \in Z$ và $g \in G$.
