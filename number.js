//Numbering-Rule
function nr(model,box) {
  document.write("[#" + model + "-" + box + "]")
}

var refs = [];
var ttls = [];
var bns = [];

//11:permutation
bns[11] = [];
refs[11] = "https://ty220127.github.io/mathemaru/permutation.html";
ttls[11] = "置換";
j = 0;
j++; Cy11 = j; bns[11][j] = "互換と巡回置換";
j++; CyTr11 = j; bns[11][j] = "命題：互換の積による巡回置換の表示";
j++; DeCo11 = j; bns[11][j] = "命題：サイクルの分離積は可換";
j++; Sg11 = j; bns[11][j] = "定義：置換";
j++; SgTh11 = j; bns[11][j] = "演習：３要素の置換の符号";

//10:map
bns[10] = [];
refs[10] = "https://ty220127.github.io/mathemaru/map.html";
ttls[10] = "写像";
j = 0;
j++; Cp10 = j; bns[10][j] = "合成写像";
j++; CpAs10 = j; bns[10][j] = "合成写像の結合法則";
j++; Id10 = j; bns[10][j] = "恒等写像";
j++; IdCp10 = j; bns[10][j] = "恒等写像との合成写像";
j++; Rs10 = j; bns[10][j] = "制限写像";
j++; Pm10 = j; bns[10][j] = "置換と合成写像";

//9:eigenvalue_eigenvector
bns[9] = [];
refs[9] = "https://ty220127.github.io/mathemaru/eigen.html";
ttls[9] = "固有値と固有ベクトル";
j = 0;
j++; ch9 = j; bns[9][j] = "固有多項式，固有方程式";
j++; ce9 = j; bns[9][j] = "命題：固有方程式の解は固有値";
j++; exe9 = j; bns[9][j] = "例題：固有値と固有ベクトルの計算";
j++; reg9 = j; bns[9][j] = "命題：正則行列の固有値は非零";
j++; inv9 = j; bns[9][j] = "命題：逆行列の固有値は元の行列の固有値の逆数";
j++; pow9 = j; bns[9][j] = "命題：行列の $m$ 乗の固有値は元の固有値の $m$ 乗";

//8:projection matrix
bns[8] = [];
refs[8] = "https://ty220127.github.io/mathemaru/projection-matrix.html";
ttls[8] = "射影行列";
j = 0;
j++; cp8 = j; bns[8][j] = "命題：射影行列の相補性";
j++; dt8 = j; bns[8][j] = "命題：射影行列の行列式";
j++; ev8 = j; bns[8][j] = "命題：射影行列の固有値";

//7:unitary matrix
bns[7] = [];
refs[7] = "https://ty220127.github.io/mathemaru/unitary-matrix.html";
ttls[7] = "ユニタリ行列と直交行列";
j = 0;
j++; td7 = j; bns[7][j] = "例：２次ユニタリ行列";
j++; pr7 = j; bns[7][j] = "命題：ユニタリ行列の積はユニタリ行列";
j++; iv7 = j; bns[7][j] = "命題：ユニタリ行列の逆行列はユニタリ行列";
j++; ad7 = j; bns[7][j] = "命題：ユニタリ行列の随伴行列はユニタリ行列";
j++; da7 = j; bns[7][j] = "命題：ユニタリ行列の行列式の絶対値";

//6:numerical-vector-space
bns[6] = [];
refs[6] = "https://ty220127.github.io/mathemaru/numerical-vector.html";
ttls[6] = "数ベクトル空間";
j = 0;
j++; numvecprop = j; bns[6][j] = "命題：数ベクトルの交換・結合・分配法則";
j++; invnumvec = j; bns[6][j] = "定義：逆ベクトル，数ベクトルの減法";
j++; zeronumvec = j; bns[6][j] = "定義：零ベクトル";
j++; invzeronumvecprop = j; bns[6][j] = "命題：逆・零ベクトルに関する性質";

//5:norm-space
bns[5] = [];
refs[5] = "https://ty220127.github.io/mathemaru/norm-space.html";
ttls[5] = "ノルム空間";
j = 0;
j++; normisdist = j; bns[5][j] = "ノルム空間は距離空間";

//4:inner-product-space
bns[4] = [];
refs[4] = "https://ty220127.github.io/mathemaru/inner-product-space.html";
ttls[4] = "内積空間";
j = 0;
j++; antilinearity = j; bns[4][j] = "第二成分の反線形性";
j++; inprodisnorm = j; bns[4][j] = "内積空間はノルム空間";

//3:measurable_space
bns[3] = [];
refs[3] = "https://ty220127.github.io/mathemaru/sigma-algebra.html";
ttls[3] = "可測空間";
j = 0;
j++; measurable_power = j; bns[3][j] = "例：冪集合は可測空間を成す";
j++; measurable_minimum = j; bns[3][j] = "例：最小のσ加法族による可測空間";
j++; measurable_fin_add = j; bns[3][j] = "命題：σ加法族の有限加法性";
j++; measurable_intersection = j; bns[3][j] = "命題：可測集合の共通部分の可測性";
j++; measurable_limit = j; bns[3][j] = "命題：上（下）極限集合の可測性";
j++; measurable_difference = j; bns[3][j] = "命題：可測集合の差の可測性";
j++; measurable_empty_universal = j; bns[3][j] = "命題：空集合及び全体集合の可測性";
j++; sigma_by_intersection = j; bns[3][j] = "命題：共通部分によるσ加法族";
j++; sigma_intersection = j; bns[3][j] = "命題：σ加法族の共通部分";
j++; sigma_generation = j; bns[3][j] = "例：σ加法族の生成";
j++; sigma_gen_unique = j; bns[3][j] = "例：σ加法族の生成の一意性";
j++; sigma_gen_inclusion = j; bns[3][j] = "例：生成されるσ加法族の包含";

//2:Markov
bns[2] = [];
refs[2] = "https://ty220127.github.io/mathemaru/markov.html";
ttls[2] = "Markov 連鎖";
j = 0;
j++; mpath = j; bns[2][j] = "命題：パスの確率";
j++; mst = j; bns[2][j] = "定義：定常分布";
j++; x = j;

//1:RW
bns[1] = [];
refs[1] = "https://ty220127.github.io/mathemaru/random-walk-z.html";
ttls[1] = "１次元ランダムウォーク";
j = 0;
j++; returnprob = j; bns[1][j] = "命題：再帰確率は $1$";
j++; y = j;
j++; x = j;

