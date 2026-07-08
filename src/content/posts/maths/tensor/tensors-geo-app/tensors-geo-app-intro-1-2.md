---
title: 'Tensors: Hình học và Ứng dụng - P1.2 - Giới thiệu - Ứng dụng của phân rã tensor'
published: 2026-02-13
description: Một số ví dụ thực tế về ứng dụng của phân rã tensor
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra, Tensor Decomposition, Phân rã tensor]
category: Tensor
toc: true
draft: false
---

Một ví dụ của bài toán phân rã tensor đó là viết một ánh xạ song tuyến tính $f:A\times B \to C$ dưới dạng tổng của các ánh xạ có dạng $(\bm{a},\bm{b})\mapsto \alpha(\bm{a})\beta(\bm{b})\bm{c}$ trong đó $\alpha \in A^*$, $\beta\in B^*$, $\bm{a}\in A$, $\bm{b}\in B$, $\bm{c}\in C$.

Trong các ứng dụng, người ta thu thập dữ liệu được sắp xếp dưới dạng một mảng đa chiều $\cal T$, được xem như một tensor có hạng $R$ nhỏ. Những vấn đề ta phải đối mặt là:
- xác định giá trị thích hợp của $R$, và/hoặc
- tìm một tensor hạng $R$ "xấp xỉ" với $\cal T$.

:::hint[<span style="color:#12a4d9;"> **Bài toán tách nguồn (source separation)** </span>]
Một bài toán trung tâm trong xử lý tín hiệu là tách nguồn, chẳng hạn “bài toán bữa tiệc cocktail”: trong một căn phòng có nhiều người đang trò chuyện. Nhiều thiết bị thu âm được đặt trong phòng để ghi lại các cuộc hội thoại. Tuy nhiên, những gì chúng ghi nhận không phải là từng cuộc trò chuyện riêng lẻ, mà là sự pha trộn của tất cả các cuộc trò chuyện. Mục tiêu là khôi phục lại nội dung mà từng người đang nói. Đáng chú ý là việc "tách trộn" này thường có thể thực hiện được bằng cách sử dụng phân rã CP. Bài toán này liên hệ với những vấn đề rộng hơn trong thống kê.
:::

## Phân rã tensor và quang phổ huỳnh quang
Người ta phân tích $I$ mẫu dung dịch; mỗi mẫu chứa các hóa chất khác nhau được pha loãng ở những nồng độ khác nhau. Mục tiêu đầu tiên là xác định số lượng $R$ các hóa chất khác nhau có mặt trong các mẫu. <span style="color:#6b7280;">(Chẳng hạn, có bốn chất: dihydroxybenzene, tryptophan, phenylalanine và DOPA.)</span>

Mỗi mẫu, giả sử là mẫu thứ $i$, lần lượt được kích thích bằng ánh sáng ở $J$ bước sóng khác nhau. Với mỗi bước sóng kích thích, người ta đo phổ phát xạ thu được. Giả sử cường độ ánh sáng huỳnh quang phát ra được đo tại $K$ bước sóng khác nhau. 

Do đó, với mỗi $i$, ta thu được một bảng $J\times K$, gọi là các ma trận kích thích–phát xạ (excitation–emission matrices).
Vì thế, dữ liệu thu được là một mảng ba chiều kích thước $I\times J\times K$. 

<figure class="figure">
  <img src="/images/tensors-geo-app/EEM.jpg" alt="EEM" />
  <figcaption>
    Tổng hợp các ma trận kích thích-phát xạ thành dữ liệu 3 chiều.
    <a href="https://christiangoueguel.com/blog/posts/post10/" target="_blank" rel="noopener noreferrer">Image source</a>.
  </figcaption>
</figure>


Trong các cơ sở, nếu $\{\bm{e}_i\}$ là một cơ sở của $\Bbb C^I$, $\{\bm{h}_j\}$ là một cơ sở của $\Bbb C^J$, và $\{\bm{g}_i\}$ là một cơ sở của $\Bbb C^K$ thì 
$$
    \mathcal{T}=\sum_{ijk} \mathcal{T}_{ijk}\bm{e}_i \otimes \bm{h}_j \otimes \bm{g}_k.
$$
Mục tiêu đầu tiên là xác định $R$ sao cho 
$$
    \mathcal{T} \approx \sum_{r}^R \bm{a}_r \otimes \bm{b}_r \otimes \bm{c}_r,
$$
trong đó mỗi khối $r$ biểu diễn một chất.

Viết $\bm{a}_r = a_{i,r}\bm{e}_i$, khi đó $a_{i,r}$ là nồng độ của chất thứ $r$ trong mẫu thứ $i$. Tương tự, với các cơ sở đã chọn của $\Bbb C^J$ và $\Bbb C^K$, ta có $c_{k,r}$ là tỉ lệ photon mà chất thứ $r$ phát ra tại bước sóng $k$, còn $b_{j,r}$ là cường độ của ánh sáng kích thích tại bước sóng $j$ nhân với hệ số hấp thụ tại bước sóng $j$.

:::hint[<span style="color:#12a4d9;"> **Phân rã tensor với dữ liệu thực** </span>]

Dữ liệu thu được tất nhiên có nhiễu, vì vậy $\cal T$ trên thực tế sẽ có hạng tổng quát (generic rank), nhưng sẽ tồn tại một tensor hạng rất thấp $\widetilde{\mathcal{T}}$ xấp xỉ tốt $\cal T$. (Đối với mọi không gian tensor phức, tồn tại một giá trị hạng xuất hiện với xác suất bằng một; giá trị này được gọi là *hạng tổng quát*.) Tuy nhiên, không có một metric tự nhiên nào gắn liền với dữ liệu, nên ý nghĩa chính xác của "xấp xỉ" ở đây không hoàn toàn rõ ràng.
Trong <a href="https://books.google.com.sg/books?hl=en&lr=&id=3cAxU0yH4fUC&oi=fnd&pg=PR5&dq=Multi-way+analysis:+Applications+in+the+chemical+sciences&ots=p8dbzRrIYc&sig=C08Yb881cKPluudk6UF6hKH_hms&redir_esc=y#v=onepage&q=Multi-way%20analysis%3A%20Applications%20in%20the%20chemical%20sciences&f=false" target="_blank" rel="noopener noreferrer">Multi-way analysis</a>, người ta tiến hành như sau để xác định $R$.

Trước hết, giả sử $R$ là khá nhỏ ($\leq 7$). Sau đó, với mỗi $r$, $1\leq r \leq 7$, ta giả định $r=R$ và áp dụng một thuật toán số nhằm tìm $r$ *thành phần* (tức là các tensor hạng-1) mà $\widetilde{\mathcal{T}}$ có thể được biểu diễn thành tổng của chúng. Những giá trị $r$ mà thuật toán không hội tụ nhanh sẽ bị loại bỏ. (Các tác giả lưu ý rằng quy trình này không được chứng minh chặt chẽ về mặt toán học, nhưng dường như hoạt động tốt trong thực tế; trong ví dụ đang xét, các giá trị $r$ bị loại đều quá lớn.)
Đối với các giá trị $r$ còn lại, người ta xem xét các tensor thu được để đánh giá xem chúng có hợp lý về mặt vật lý hay không. Điều này cho phép loại bỏ các giá trị $r$ quá nhỏ. Trong ví dụ, cuối cùng còn lại $r=4,5$.

Bây giờ giả sử $R$ đã được xác định. Vì $R$ tương đối nhỏ, nên (bỏ qua những trường hợp suy biến tầm thường) biểu diễn của $\widetilde{\mathcal{T}}$ dưới dạng tổng của $R$ tensor hạng-1 là duy nhất. Do đó, bằng cách thực hiện phân rã của $\widetilde{\mathcal{T}}$, ta có thể khôi phục nồng độ của từng chất trong số $R$ chất trong mỗi dung dịch thông qua việc xác định các vectơ $\bm{a}_r$, cũng như các phổ kích thích và phát xạ riêng lẻ bằng cách xác định các vectơ $\bm{b}_r, \bm{c}_r$.
:::

::::hint[<span style="color:#12a4d9;"> **Cumulant** </span>]

Trong thống kê, người ta thu thập dữ liệu với khối lượng lớn, được lưu trữ dưới dạng một mảng đa chiều, và tìm cách rút trích thông tin từ dữ liệu đó. Một dãy đại lượng quan trọng cần được rút ra từ các tập dữ liệu là các cumulant.

Giả sử $\Bbb R^n$ được trang bị một độ đo xác suất $\mathrm{d}\mu$, tức là một độ đo đủ "tốt" sao cho $\int_{\Bbb R^n}\mathrm{d}\mu=1$. Một hàm đo được $f:\Bbb R^n \to \Bbb R$ được gọi là <span style="color:#ff6e40;"><em>biến ngẫu nhiên</em></span>.<br/>
<span style="color:#6b7280;">(Tên gọi này xuất phát từ việc nếu ta chọn một "điểm ngẫu nhiên" $\bm{x}\in \Bbb R^n$ theo độ đo xác suất $\mu$, thì $f$ sẽ xác định một "giá trị ngẫu nhiên" $f(\bm{x})$.)</span>

Với một biến ngẫu nhiên $f$, ta ký hiệu
$$
\Bbb E[f] \coloneqq \int_{\Bbb R^n} f(\bm{x})\mathrm{d}\mu.
$$
Đại lượng $\Bbb E[f]$ được gọi là <span style="color:#ff6e40;"><em>kỳ vọng</em></span> (expectation) hay <span style="color:#ff6e40;"><em>giá trị trung bình</em></span> (mean) của hàm $f$.

:::hint[<span style="color:#12a4d9;"> **Ví dụ thực tế của mean** </span>]
Chẳng hạn, xét một phân bố khối lượng trong không gian với các tọa độ $x^1, x^2, x^3$ và mật độ được cho bởi một độ đo xác suất $\mu$. (Mỗi hàm tọa độ có thể được xem như một biến ngẫu nhiên.) Khi đó, các tích phân
$$
m^j\coloneqq \Bbb E[x^j] \coloneqq \int_{\Bbb R^3} x^j \mathrm{d}\mu.
$$
cho ta các tọa độ của trọng tâm (còn gọi là mean).
:::

Tổng quát, định nghĩa <span style="color:#ff6e40;"><em>mô-men</em></span> (moment) của các biến ngẫu nhiên $x^j$:
$$
m_{\bm{x}}^{i_1,\ldots,i_p}\coloneqq \Bbb E[x^{i_1}\cdots x^{i_p}]
=\int_{\Bbb R^n}x^{i_1}\cdots x^{i_p}\mathrm{d}\mu.
$$
<span style="color:#6b7280;"><em>Trong thực tế, các tích phân này được xấp xỉ bằng dữ liệu thống kê rời rạc thu được từ các mẫu quan sát.</em></span>

Một phép đo đầu tiên về mức độ phụ thuộc giữa các hàm $x^j$ được cho bởi các đại lượng
$$
\kappa^{ij}=\kappa^{ij}_{\bm{x}}\coloneqq m^{ij}-m^im^j
= \int_{\Bbb R^n}x^ix^j\mathrm{d}\mu
-\left(\int_{\Bbb R^n}x^i\mathrm{d}\mu\right)\left(\int_{\Bbb R^n}x^j\mathrm{d}\mu\right),
$$
được gọi là <span style="color:#ff6e40;"><em>cumulant bậc hai</em></span>, hay <span style="color:#ff6e40;"><em>ma trận hiệp phương sai</em></span> (covariance matrix).

Ta nói rằng các hàm $x_j$ <span style="color:#ff6e40;"><em>độc lập thống kê cấp hai</em></span> nếu $\kappa_{ij}(\bm{x}) = 0$ với mọi $i \ne j$.

Để nghiên cứu tính độc lập thống kê, thay vì xét riêng lẻ từng $\kappa_{ij}(\bm{x})$, ta gom chúng lại thành một ma trận đối xứng
$
\kappa_{2,\bm{x}} = \kappa_2(\bm{x}) \in \cal{S}^2 \mathbb{R}^n.
$
Nếu các phép đo phụ thuộc vào $R < n$ sự kiện độc lập, thì hạng của ma trận này sẽ bằng $R$.
(Trong thực tế, ma trận này chỉ "gần" với một ma trận hạng $R$.)

Ta có thể định nghĩa các cumulant bậc cao hơn để thu được những thước đo sâu hơn về tính độc lập thống kê.

:::hint[<span style="color:#12a4d9;"> **Cumulant bậc ba** </span>]
Chẳng hạn, xét
$$
\kappa^{ijk}
=
m^{ijk}
- \bigl(m^i m^{jk} + m^j m^{ik} + m^k m^{ij}\bigr)
+ 2 m^i m^j m^k.
$$
Từ các đại lượng này, ta có thể tạo thành một tensor đối xứng bậc ba; và tương tự như vậy cho các bậc cao hơn.
:::

:::hint[<span style="color:#12a4d9;"> **Độc lập thống kê** </span>]

Các cumulant của một tập các biến ngẫu nhiên cho ta một chỉ báo về mức độ phụ thuộc thống kê lẫn nhau của chúng; còn các cumulant bậc cao của một biến ngẫu nhiên đơn lẻ phản ánh mức độ "không Gaussian" của nó.

Trong xác suất, hai biến cố $A, B$ được gọi là độc lập nếu
$
\Bbb P(A \wedge B) = \Bbb P(A)\Bbb P(B).
$

Nếu $x$ là một biến ngẫu nhiên, ta có thể tính $\Bbb P(x \le a)$.
Hai biến ngẫu nhiên $x, y$ được gọi là <span style="color:#ff6e40;"><em>độc lập thống kê</em></span> nếu
$$
\Bbb P(\{x \le a\} \wedge \{y \le b\})
=
\Bbb P(\{x \le a\}) \Bbb P(\{y \le b\})
$$
với mọi $a, b \in \mathbb{R}$.

Một tính chất quan trọng của cumulant là:

> Nếu các $x_i$ được xác định bởi $R$ đại lượng độc lập thống kê, thì $\mathrm{srank}(\kappa_p(x)) \le R$ (và trong tổng quát dấu bằng xảy ra) với mọi $p \ge 2$.
:::
::::

## Tách nguồn mù (Blind Source Separation)

Một ứng dụng điển hình của tách nguồn mù (BSS) như sau: 
Big Brother muốn xác định vị trí các trạm phát thanh lậu tại Happyville. 
Để thực hiện điều này, các ăng-ten được bố trí tại nhiều địa điểm khác nhau nhằm thu nhận tín hiệu vô tuyến. 
Làm thế nào có thể xác định vị trí các nguồn phát chỉ từ những tín hiệu thu được tại các ăng-ten?

Ký hiệu $y^j(t)$ là tín hiệu đo được tại ăng-ten thứ $j$ vào thời điểm $\cal T$. 
Giả sử tồn tại một quan hệ có dạng
$$
    \begin{bmatrix}
        y^1(t)\\
        \vdots\\
        y^m(t)
    \end{bmatrix}
    = \begin{bmatrix}
        a^1_1\\
        \vdots\\
        a^m_1
    \end{bmatrix}x^1(t)
    + \cdots +
    \begin{bmatrix}
        a^1_R\\
        \vdots\\
        a^m_R
    \end{bmatrix}x^R(t)
    + \begin{bmatrix}
        v^1(t)\\
        \vdots\\
        v^m(t)
    \end{bmatrix}
$$
hay ta có thể viết dưới dạng
<div id="eq-1.2.1"></div>

$$
    \bm{y}=\bm{A}\bm{x}+\bm{v}. \tag{1.2.1}
$$
Ở đây $\bm{A}$ là một ma trận $m \times r$ cố định, $\bm{v}=\bm{v}(t)\in \Bbb R^m$ là một hàm vector biểu diễn nhiễu và $\bm{x}(t)=(x^1(t),\ldots,x^R(t))^\top$ biểu diễn các hàm độc lập thống kê theo $\cal T$ tương ứng với các vị trí nguồn. Các $v^i(t)$ được giả sử thỏa các điều kiện sau:
- là các biến ngẫu nhiên độc lập và độc lập với các $x^j(t)$;
- $\mathbb{E}[v_i] = 0$;
- các moment $\mathbb{E}[v_{i_1}\cdots v_{i_p}]$ bị chặn trên bởi một hằng số nhỏ.

Ta mong muốn khôi phục $\bm{x}(t)$ cùng với ma trận $\bm{A}$ chỉ từ việc biết hàm $\bm{y}(t)$.
:::hint[]
Lưu ý rằng các $x_j$ giống như các vectơ riêng, theo nghĩa là chúng chỉ được xác định tới một hệ số tỉ lệ và một hoán vị; do đó, "khôi phục" ở đây được hiểu là khôi phục tới sai khác bởi tỉ lệ và hoán vị này. Hơn nữa, "khôi phục" thực chất có nghĩa là khôi phục các mẫu xấp xỉ của $x$ từ các mẫu của $y$.
:::

:::hint
Thoạt nhìn, nhiệm vụ này dường như bất khả thi. Tuy nhiên, nếu ta có một phương trình như [(1.2.1)](#eq-1.2.1), thì ta có thể so sánh các đại lượng $\kappa^{ij}_{\bm{y}}$ với $\kappa^{st}_{\bm{x}}$, bởi tính tuyến tính của tích phân:
$$
    \kappa^{ij}_{\bm{y}} = \bm{A}_{s}^i A_{t}^j \kappa^{st}_{\bm{x}} + \kappa^{ij}_{\bm{v}}.
$$
Do giả thiết độc lập thống kê, ta có 
$
\kappa^{st}_{\bm{x}} = \delta^{st} \kappa^{ss}_{\bm{x}},
$
trong đó $\delta^{st}$ là delta Kronecker, và $\kappa^{ij}_{\bm{v}}$ nhỏ, nên có thể 
bỏ qua. Khi đó, ta thu được một hệ $\binom{m}{2}$ phương trình tuyến tính 
với $mr + r$ ẩn. Nếu giả sử $m > R$ (trường hợp này được gọi là *hỗn hợp 
quá xác định* – overdetermined mixture), thì phép đếm số ẩn và số phương trình 
cho thấy triển vọng khả quan.

Tuy nhiên, mặc dù một ma trận đối xứng $m \times m$ hạng $R$ có thể được 
viết thành tổng của các ma trận đối xứng hạng-1, biểu diễn này không bao giờ 
là duy nhất. (Tương đương với việc các đa tạp secant của đa tạp Veronese bậc hai là suy biến.)

Do đó, ta chuyển sang xét tensor đối xứng bậc ba (hay đa thức bậc ba)
$\kappa_3(\bm{y})$ và tìm cách phân rã nó thành tổng của $R$ lập phương
nhằm khôi phục ma trận $\bm{A}$. Trong trường hợp này, tình hình khả quan hơn nhiều:
miễn là hạng nhỏ hơn hạng tổng quát, thì với xác suất bằng một sẽ tồn tại
một phân rã duy nhất (ngoại trừ trường hợp $\cal{S}^3\mathbb{C}^5$, nơi cần nhỏ
hơn hạng tổng quát hai đơn vị).

Khi đã xác định được ma trận $\bm{A}$, ta có thể khôi phục các $x^j$
tại những thời điểm lấy mẫu.

Điều đáng kinh ngạc hơn nữa là, về nguyên tắc, thuật toán này vẫn hoạt động
ngay cả khi số nguồn lớn hơn số hàm được lấy mẫu, tức là khi $R > m$
(trường hợp này được gọi là hỗn hợp thiếu xác định -- underdetermined mixture).

:::

## Các ứng dụng khác
Phân rã tensor xuất hiện trong nhiều lĩnh vực. Một số ví dụ có thể kể đến như:
- Một trong những ứng dụng sớm của phân rã tensor là trong lĩnh vực tâm lý học định lượng (psychometrics), nhằm sử dụng nó để đánh giá trí thông minh và các đặc trưng nhân cách khác.
- Trong địa vật lý (geophysics); ví dụ, việc diễn giải dữ liệu từ phương pháp điện từ địa tầng (magnetotelluric) cho các cấu trúc vùng một chiều và hai chiều.
- Trong diễn giải hình ảnh cộng hưởng từ (MRI). Một ứng dụng là xác định vị trí trong não gây ra các cơn động kinh ở bệnh nhân hoặc chẩn đoán và quản lý đột quỵ.
- Trong khai phá dữ liệu (data-mining).
- Trong phân tích số (numerical analysis). Nhờ vào tính hội tụ của chuỗi Fourier trong $L^2(\mathbb{R}^n)$, ta có
$
L^2(\mathbb{R}^n) = L^2(\mathbb{R}) \otimes \cdots \otimes L^2(\mathbb{R}),
$
và người ta thường xấp xỉ một hàm $n$ biến bằng một tổng hữu hạn các tích của các hàm một biến, tổng quát hóa phương pháp tách biến cổ điển.

## Các vấn đề thực tiễn trong phân rã tensor

Có bốn vấn đề chính cần xem xét khi làm việc với phân rã tensor: *sự tồn tại*, *tính duy nhất*, *thực hiện phân rã* và *nhiễu*.

1. **Sự tồn tại.** Trong nhiều bài toán phân rã tensor, vấn đề đầu tiên cần giải quyết là xác định hạng của tensor $\cal T$ đang xét. Trong các trường hợp có các phương trình tường minh cho các tensor có hạng biên $R$, nếu $\cal T$ thỏa mãn các phương trình đó, thì với xác suất bằng một, $\cal T$ có hạng không quá $R$. (Đối với các tensor đối xứng có hạng nhỏ, luôn đúng rằng hạng không quá $R$)

2. **Tính duy nhất.** Trong các bài toán xuất phát từ phổ học (spectroscopy) và xử lý tín hiệu (signal processing), người ta cũng quan tâm đến tính duy nhất của phân rã. Nếu hạng đủ nhỏ, tính duy nhất được đảm bảo với xác suất bằng một Hơn nữa, có các kiểm tra tường minh mà người ta có thể thực hiện trên bất kỳ tensor nào để xác nhận tính duy nhất.

3. **Thực hiện phân rã.** Trong một số tình huống, có các thuật toán phân rã chính xác một tensor — chúng thường là hệ quả của việc có các phương trình kiểm tra hạng biên. Trong hầu hết các tình huống, người ta sử dụng các thuật toán số.

4. **Nhiễu.** Để bàn về nhiễu trong dữ liệu, cần phải có một hàm khoảng cách. Các tính chất của tensor ở đây được định nghĩa độc lập với bất kỳ hàm khoảng cách nào, và không có các hàm khoảng cách tự nhiên trên không gian tensor (mà chỉ có các lớp hàm như vậy).

