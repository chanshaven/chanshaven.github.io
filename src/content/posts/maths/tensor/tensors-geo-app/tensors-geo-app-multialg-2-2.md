---
title: 'Tensors: Hình học và Ứng dụng - P2.2 - Đại số đa tuyến tính - Tích tensor'
published: 2026-03-01
description: Một số kết quả trong đại số tuyến tính
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra, Tensor Decomposition, Phân rã tensor, Tensor product, Tích tensor]
category: Tensor
toc: true
draft: false
---

:::hint[]
Trong vật lý, kỹ thuật và các lĩnh vực khác, tensor thường được định nghĩa
như các mảng nhiều chiều. Ngay cả một ánh xạ tuyến tính cũng thường
được định nghĩa thông qua một ma trận biểu diễn nó theo một cơ sở đã chọn.

Xét chẳng hạn không gian các ma trận kích thước $n \times n$, trước hết
như biểu diễn không gian các ánh xạ tuyến tính $V \to W$, trong trường hợp
$\dim V = \dim W = n$. Khi đó, với $f : V \to W$, ta luôn có thể thay đổi cơ sở của $V$
và $W$ sao cho ma trận của $f$ có dạng
$$
\begin{pmatrix}
\bm{I}_k & 0 \\
0 & 0
\end{pmatrix},
$$
trong đó phép chia khối có kích thước $(k, n-k) \times (k, n-k)$,
vì vậy chỉ có $n$ ánh xạ khác nhau như thế (tính đến tương đương).

Mặt khác, nếu không gian các ma trận $n \times n$ biểu diễn các ánh xạ
tuyến tính $V \to V$, thì ta chỉ có thể đưa về dạng chuẩn Jordan
(hoặc dạng chuẩn hữu tỉ), tức là có cả một họ tham số các ma trận
không tương đương với nhau.

Chúng ta theo dõi tác động của nhóm
(group actions) là điều thiết yếu, vì thế tốt hơn là đưa ra các định nghĩa
không phụ thuộc vào việc chọn cơ sở cho ánh xạ tuyến tính và tensor.
:::

## Định nghĩa
### Không gian các ánh xạ tuyến tính
Ký hiệu $V^*\otimes W$ cho không gian vector các ánh xạ tuyến tính $V \to W$. Do đó, $V\otimes W$ ký hiệu không gian các ánh xạ tuyến tính $V^* \to W$.

Không gian $V^*\otimes W$  có thể được hiểu theo 4 cách sau:
1. không gian các ánh xạ tuyến tính $V\to W$,
2. không gian các ánh xạ tuyến tính $W^* \to V$ (sử dụng đẳng cấu xác định bởi phép lấy chuyển vị),
3. không gian vector đối ngẫu của $V\otimes W^*$,
4. không gian các ánh xạ song tuyến tính $V\times W^* \to \Bbb C$.

Ta chọn các cơ sở và biểu diễn $f\in V^*\otimes W$ bởi ma trận kích thước $n\times m$ (với $\dim V =n,\;\dim W=m$): $\bm{X}=(f^i_s)$. Khi đó, tương ứng với từng cách hiểu ở trên, ta có các tác động:
1. bởi phép nhân bởi một vector cột $\bm{v} \mapsto \bm{X}\bm{v}$,
2. bởi phép nhân phải bởi một vector hàng $\beta \mapsto \beta \bm{X}$,
3. bởi $\bm{Y} \mapsto \sum_{i,s}f^i_sg^s_i = \operatorname{trace}(\bm{X}\bm{Y})$, với $\bm{Y}=(g^s_i)$ là ma trận $m\times n$,
4. bởi $(\bm{v},\beta)\mapsto \sum_{i,s} f^i_s v_i \beta^s$

:::hint[**Giải thích**]
1. Ở đây ta có đẳng cấu 
$$
    V^*\otimes W \cong \operatorname{Hom}(V,W).
$$
Một tensor $f=\alpha \otimes \bm{w}$ tác động lên $\bm{v}\in V$ bởi $(\alpha\otimes \bm{w})(\bm{v}) = \alpha(\bm{v})\bm{w}\in W$. Khi chọn cơ sở, nó trở thành nhân ma trận với vector cột $\bm{v} \mapsto \bm{X}\bm{v}$.

2. Mỗi ánh xạ $f:V\times W$ có ánh xạ chuyển vị $f^\top: W^*\to V^*$. Do đó ta có thể hiểu phần tử đó như ánh xạ tác động lên covector: $\beta \mapsto \beta \bm{X}$.

3. Ta có đẳng cấu 
$$
    V^*\otimes W \cong (V\otimes W^*)^*.
$$
Tức là ta xem ánh xạ tuyến tính $f :V\to W$ như một phiếm hàm tuyến tính $f:V\otimes W^* \to \Bbb C$ được xác định bởi $\bm{Y} \mapsto \sum_{i,s}f^i_sg^s_i = \operatorname{trace}(\bm{X}\bm{Y})$, trong đó $\bm{Y}=(g^s_i)$ là ma trận $m\times n$ biểu diễn phần tử trong $V\otimes W^*$.

4. Ta có đẳng cấu 
$$
    V^*\otimes W \cong \mathcal{L}(V,W^*;\Bbb C),
$$
với $(\bm{v},\beta)\mapsto \beta(f(\bm{v}))$. Khi chọn cơ sở, ta được $\beta \bm{X} \bm{v} = \sum_{i,s}f^i_s v_i \beta^s$
:::

:::hint[]
Các phần tử hạng-1 trong $V \otimes W$ sinh ra toàn bộ $V \otimes W$. Cụ thể, nếu $(\bm v_i)$ là cơ sở của $V$ và $(\bm w_s)$ là cơ sở của $W$, khi đó các tensor $\bm v_i \otimes \bm w_s$ tạo thành một cơ sở của $V \otimes W$.
:::

### Tích tensor và tensor
Cho $V_1,\ldots, V_k$ là các không gian vector. Một hàm 
$$
    f:V_1\times \cdots \times V_k \to \Bbb C
$$
là <span style="color:#ff6e40;"><em>đa tuyến tính</em></span> nếu nó tuyến tính theo từng biến $V_j$.</br>
Không gian các hàm đa tuyến tính như vậy được ký hiệu là $V_1^* \otimes \cdots \otimes V_k^*$ và được gọi là <span style="color:#ff6e40;"><em>tích tensor</em></span> của các không gian vector $V_1^*,\ldots, V_k^*$.</br>
Các phần tử $\mathcal{T} \in V_1^* \otimes \cdots \otimes V_k^*$ được gọi là các <span style="color:#ff6e40;"><em>tensor</em></span>.</br>
Số nguyên $k$ được gọi là <span style="color:#ff6e40;"><em>bậc tensor</em></span> (order) của $\cal T$.</br>
Bộ số $(\dim V_1, \ldots, \dim V_k)$ được gọi là <span style="color:#ff6e40;"><em>chiều</em></span> của $\mathcal T$.

:::hint[**Tổng quát**]
Một hàm
$$
    f : V_1 \times \cdots \times V_k \to W
$$
được gọi là <span style="color:#ff6e40;"><em>đa tuyến tính</em></span> nếu nó tuyến tính theo từng biến $V_j$.
Không gian các hàm đa tuyến tính như vậy được ký hiệu là
$$
V_1^* \otimes V_2^* \otimes \cdots \otimes V_k^* \otimes W
$$
và được gọi là <span style="color:#ff6e40;"><em>tích tensor</em></span> của các không gian
$V_1^*, \dots, V_k^*, W$.
:::

Ký hiệu
$$
\widehat{V}_j := 
V_1 \otimes \cdots \otimes V_{j-1} 
\otimes V_{j+1} \otimes \cdots \otimes V_n.
$$

Với $\mathcal T \in V_1 \otimes \cdots \otimes V_n$, ký hiệu
$
\mathcal T(V_j^*) \subset \widehat{V}_j
$
là ảnh của ánh xạ tuyến tính
$
V_j^* \longrightarrow \widehat{V}_j.
$

### Hạng đa tuyến tính

Định nghĩa <span style="color:#ff6e40;"><em>hạng đa tuyến tính</em></span> (multilinear rank), đôi khi còn gọi là
<span style="color:#ff6e40;"><em>hạng song tuyến</em></span> (duplex rank) hoặc <span style="color:#ff6e40;"><em>hạng Tucker</em></span> (Tucker rank),
của $\mathcal T \in V_1 \otimes \cdots \otimes V_n$ là bộ $n$-số tự nhiên
$$
\operatorname{mlrank}(\mathcal T)
\coloneqq
\big(
\dim \mathcal T(V_1^*), \dots, \dim \mathcal T(V_n^*)
\big).
$$


Số $\dim\big(\mathcal T(V_j^*)\big)$ được gọi là <span style="color:#ff6e40;"><em>hạng theo mode $j$</em></span> 
(mode-$j$ rank) của $\cal T$.

Ký hiệu
$$
V^{\otimes k} := 
\underbrace{V \otimes \cdots \otimes V}_{k \text{ bản sao}}
$$
là tích tensor của $k$ bản sao của $V$.

:::hint[**Slices, fibers**]
Ta có thể hình dung các tensor (khi đã chọn cơ sở)
dưới dạng các <span style="color:#ff6e40;"><em>lát cắt</em></span> (slices).

Giả sử $A$ có cơ sở $\bm a_1, \dots, \bm a_a$ và tương tự với $B, C$ (với $\dim A =a, \dim B =b, \dim C=c$).
Cho
$
\mathcal T \in A \otimes B \otimes C,
$
khi đó theo các cơ sở đã chọn ta có thể viết
$$
\mathcal T = \mathcal T^{i,s,u} \, \bm a_i \otimes \bm b_s \otimes \bm c_u.
$$

Khi ấy ta lập một bảng hình hộp chữ nhật kích thước $a \times b \times c$
với các phần tử là các hệ số $\cal T^{i,s,u}$.

Khối này có thể được phân tích thành các <span style="color:#ff6e40;"><em>mode</em></span> hoặc các <span style="color:#ff6e40;"><em>lát cắt</em></span>.
Chẳng hạn, ta có thể xem $\cal T$ như một họ gồm $a$ ma trận kích thước
$b \times c$:
$$
(\cal T^{1,s,u}), \dots, (T^{a,s,u}),
$$
được gọi là các <span style="color:#ff6e40;"><em>lát cắt ngang</em></span> (horizontal slices).

Hoặc ta có thể xem $T$ như một họ gồm $b$ ma trận
$$
(T^{i,1,u}), \dots, (T^{i,b,u}),
$$
được gọi là các <span style="color:#ff6e40;"><em>lát cắt bên</em></span> (lateral slices),

hoặc như một họ gồm $c$ ma trận gọi là các <span style="color:#ff6e40;"><em>lát cắt trước</em></span> (frontal slices).

<figure class="figure">
  <img src="/images/tensors-geo-app/slices.jpg" alt="slices" />
  <figcaption>
    Các lát cắt của một tensor.
    <a href="https://www.math.ucdavis.edu/~saito/data/tensor/kolda-bader_tensor-decomp-siamrev.pdf" target="_blank" rel="noopener noreferrer">Kolda, Bader</a>.
  </figcaption>
</figure>

Khi cố định hai chỉ số, vector thu được trong không gian thứ ba
được gọi là một <span style="color:#ff6e40;"><em>sợi</em></span> (fiber).

<figure class="figure">
  <img src="/images/tensors-geo-app/fibers.jpg" alt="fibers" />
  <figcaption>
    Các sợi của một tensor.
    <a href="https://www.math.ucdavis.edu/~saito/data/tensor/kolda-bader_tensor-decomp-siamrev.pdf" target="_blank" rel="noopener noreferrer">Kolda, Bader</a>.
  </figcaption>
</figure>
:::


## Ngoài lề
### Slice của toán tử nhân ma trận
::::hint[**Ví dụ slice của toán tử nhân ma trận**]
Xét toán tử nhân ma trận $2\times 2$
$$
\mathcal M \in A\otimes B\otimes C 
= (U^*\otimes V)\otimes (V^*\otimes W)\otimes (W^*\otimes U)
$$
theo cơ sở
$$
\bm a_{11} = \bm u_1^*\otimes \bm v_1,\quad
\bm a_{12} = \bm u_1^*\otimes \bm v_2,\quad
\bm a_{21} = \bm u_2^*\otimes \bm v_1,\quad
\bm a_{22} = \bm u_2^*\otimes \bm v_2
$$
của $A$, và các cơ sở tương tự cho $B$ và $C$.

:::hint[**Nhắc lại về phép nhân ma trận**]
Giả sử $U,V,W$ là các không gian vector. Ta muốn mô tả phép nhân ma trận 
$$
    (U\to V) \times (V\to W) \to (U\to W).
$$
Ta đã biết ở [Phần 2.2, Mục 1.1]( /posts/maths/tensor/tensors-geo-app/tensors-geo-app-multialg-2-2/#không-gian-các-ánh-xạ-tuyến-tính ) rằng một ánh xạ tuyến tính $\bm A:U\to V$ thuộc không gian $(U^*\otimes V)\eqqcolon A$. Khi đó phần tử cơ sở trong $A$ có dạng $\bm u^* \otimes \bm v$.
:::
Toán tử nhân ma trận $2\times2$ là tensor
$$
\mathcal M = \sum_{i,j,k=1}^2
(\bm u_i^*\otimes \bm v_j)\otimes
(\bm v_j^*\otimes \bm w_k)\otimes
(\bm w_k^*\otimes \bm u_i).
$$

Nó biểu diễn phép nhân ma trận
$$
(\bm X,\bm Y)\longmapsto \bm X \bm Y.
$$

Ta cố định chỉ số đầu tiên (tức là lấy horizontal slices theo $A$).

Với cơ sở $A$ đã cho,
slice ứng với $\bm a_{11} = \bm u_1^*\otimes \bm v_1$:
$$
\cal M_{\bm a_{11}}
=
(\bm v_1^*\otimes \bm w_1)\otimes (\bm w_1^*\otimes \bm u_1)
+
(\bm v_1^*\otimes \bm w_2)\otimes (\bm w_2^*\otimes \bm u_1).
$$

Slice ứng với $\bm a_{12} = \bm u_1^*\otimes \bm v_2$:
$$
\cal M_{\bm a_{12}}
=
(\bm v_2^*\otimes \bm w_1)\otimes (\bm w_1^*\otimes \bm u_1)
+
(\bm v_2^*\otimes\bm w_2)\otimes (\bm w_2^*\otimes \bm u_1).
$$

Slice ứng với $\bm a_{21} = \bm u_2^*\otimes \bm v_1$:
$$
\cal M_{\bm a_{21}}
=
(\bm v_1^*\otimes \bm w_1)\otimes (\bm w_1^*\otimes \bm u_2)
+
(\bm v_1^*\otimes \bm w_2)\otimes (\bm w_2^*\otimes \bm u_2).
$$

Slice ứng với $\bm a_{22 }= \bm u_2^*\otimes \bm v_2$:
$$
\cal M_{\bm a_{22}}
=
(\bm v_2^*\otimes \bm w_1)\otimes (\bm w_1^*\otimes \bm u_2)
+
(\bm v_2^*\otimes \bm w_2)\otimes (\bm w_2^*\otimes \bm u_2).
$$

Mỗi slice là một phần tử của $B\otimes C$ và có thể được xem như
một ma trận $4\times4$ (hoặc dạng khối $2\times2$ của các ma trận $2\times2$).

Cụ thể hơn, mỗi slice tương ứng với việc cố định một cặp chỉ số $(i,j)$
trong công thức
$$
\cal M^{(i,j),(j,k),(k,i)}.
$$

*Trực giác*:
Tensor nhân ma trận có cấu trúc
$\cal M^{i,j,k} = 1$ nếu chỉ số khớp đúng theo $j$,
và $0$ nếu không khớp.
Vì vậy mỗi slice theo $A$ chính là
“giữ cố định một vị trí của ma trận bên trái”
và cho chỉ số $k$ chạy tự do.
::::

### Tính giao hoán của tích tensor và đối ngẫu 
:::hint[]
Cho $\alpha \in V^*$, $\beta \in W^*$.
Định nghĩa tác động của $\alpha \otimes \beta \in V^*\otimes W^*$ 
lên $V\otimes W$ bởi
$$
(\alpha\otimes\beta)(\bm v\otimes \bm w)
=
\alpha(\bm v)\beta(\bm w),
$$
với $\bm v\in V$, $\bm w\in W$, và mở rộng tuyến tính.
Khi đó phép đồng nhất này xác định một đẳng cấu
$$
V^*\otimes W^* \cong (V\otimes W)^*.
$$
:::

### Trường vô hướng không làm thay đổi tensor
::::hint[]
Ta có
$$
V \otimes \mathbb{C} \simeq V.
$$
:::hint[]
Ta định nghĩa ánh xạ tuyến tính
$$
\Phi : V \otimes \mathbb{C} \longrightarrow V, \quad \bm v \otimes \lambda \mapsto \lambda \bm v.
$$
Mở rộng tuyến tính cho mọi phần tử của $V \otimes \mathbb{C}$.

Định nghĩa
$$
\Psi : V \longrightarrow V \otimes \mathbb{C}, \quad \bm v \mapsto \bm v \otimes 1.
$$
Rõ ràng $\Psi$ là tuyến tính.

Ta có
$$
\Phi(\Psi(\bm v))
=
\Phi(\bm v\otimes 1)
=
1 \cdot \bm v
=
\bm v.
$$
Và với tensor hạng-1:
$$
\Psi(\Phi(\bm v\otimes\lambda))
=
\Psi(\lambda \bm v)
=
\lambda \bm v \otimes 1
= 
\bm v \otimes \lambda.
$$
Suy ra $\Psi \circ \Phi = \mathrm{id}$ và $\Phi \circ \Psi = \mathrm{id}$.

Ta có đẳng cấu tự nhiên
$$
V \otimes \mathbb{C} \cong V.
$$
:::
::::


### dd 
::::hint[]
Với mỗi tập con $I \subset \{1,\dots,k\}$ và tập bù $I^c$,
tồn tại các đồng nhất tự nhiên
giữa
$
V_1^* \otimes \cdots \otimes V_k^*
$
và không gian các ánh xạ đa tuyến tính
$$
V_{i_1} \times \cdots \times V_{i_{|I|}}
\longrightarrow
V_{i_1^c}^* \otimes \cdots \otimes V_{i_{k-|I|}^c}^*
$$
trong đó $\{j_1,\dots,j_{k-|I|}\}=I^c$.

:::hint[]
Do tính hoán vị tự nhiên của tích tensor, ta có đẳng cấu tự nhiên
$$
V_1^* \otimes \cdots \otimes V_k^*
\cong
\underbrace{\bigotimes_{i\in I} V_i^* }_{\coloneqq A}
\otimes
\underbrace{ \bigotimes_{j\in I^c} V_j^* }_{\coloneqq B} = A\otimes B.
$$
Ta biết rằng
$$
A = \bigotimes_{i\in I} V_i^*
\cong
\mathcal L
\Big(
V_1,\ldots, V_{|I|} ; \mathbb{C}
\Big).
$$

Do đó một phần tử của $A\otimes B$ có thể được hiểu là
một ánh xạ đa tuyến tính theo các biến $V_i$ ($i\in I$)
với giá trị trong $B$.

Tức là có đẳng cấu tự nhiên
$$
A\otimes B
\cong
\mathcal L
\Big(
V_1, \ldots, V_{|I|} ; B
\Big).
$$

Với tensor hạng-1
$$
\mathcal T =
 \bigotimes_{i\in I} \alpha_i 
\otimes
 \bigotimes_{j\in I^c} \beta_j ,
$$

ta định nghĩa ánh xạ
$$
\Phi_{\cal T} :
\prod_{i\in I} V_i
\longrightarrow
\bigotimes_{j\in I^c} V_j^*, \qquad (v_i)_{i\in I} \longmapsto\left(
\prod_{i\in I} \alpha_i(v_i)
\right)
\bigotimes_{j\in I^c} \beta_j.
$$

Mở rộng tuyến tính cho tổng các tensor hạng-1,
ta thu được ánh xạ đa tuyến tính mong muốn.


Việc xây dựng chỉ dựa vào:

- hoán vị tự nhiên của tensor,
- tính chất phổ quát của tích tensor.

Do đó đẳng cấu là tự nhiên (canonical),
không phụ thuộc chọn cơ sở.

Ngoài ra hai không gian có cùng số chiều hữu hạn,
nên ánh xạ là song ánh.

Với mọi $I \subset \{1,\dots,k\}$ ta có đẳng cấu tự nhiên
$$
V_1^* \otimes \cdots \otimes V_k^*
\cong
\mathcal L
\Big(
V_{i_1},\ldots V_{i_{|I|}};
\;
\bigotimes_{j\in I^c} V_j^*
\Big).
$$
:::
::::