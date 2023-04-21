//Numbering-Rule
function nr(model,box) {
  document.write("[#" + model + "-" + box + "]")
}

var refs = [];
var ttls = [];
var bns = [];

i = 0;

//6:numerical-vector-space
i++; numvec = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/mathemaru/numerical-vector.html";
ttls[i] = "数ベクトル空間";
j = 0;
j++; numvecprop = j; bns[i][j] = "数ベクトルの交換・結合・分配法則";
j++; invnumvec = j; bns[i][j] = "逆ベクトル，ベクトルの減法";
j++; zeronumvec = j; bns[i][j] = "零ベクトル";
j++; invzeronumvecprop = j; bns[i][j] = "逆・零ベクトルに関する性質";

//3:measurable_space
i++; measurable = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/mathemaru/sigma-algebra.html";
ttls[i] = "可測空間";
j = 0;
j++; measurable_power = j; bns[i][j] = "例：冪集合は可測空間を成す";
j++; measurable_minimum = j; bns[i][j] = "例：最小のσ加法族による可測空間";
j++; measurable_fin_add = j; bns[i][j] = "命題：σ加法族の有限加法性";
j++; measurable_intersection = j; bns[i][j] = "命題：可測集合の共通部分の可測性";
j++; measurable_limit = j; bns[i][j] = "命題：上（下）極限集合の可測性";
j++; measurable_difference = j; bns[i][j] = "命題：可測集合の差の可測性";
j++; measurable_empty_universal = j; bns[i][j] = "命題：空集合及び全体集合の可測性";
j++; sigma_by_intersection = j; bns[i][j] = "命題：共通部分によるσ加法族";
j++; sigma_intersection = j; bns[i][j] = "命題：σ加法族の共通部分";
j++; sigma_generation = j; bns[i][j] = "例：σ加法族の生成";
j++; sigma_gen_unique = j; bns[i][j] = "例：σ加法族の生成の一意性";
j++; sigma_gen_inclusion = j; bns[i][j] = "例：生成されるσ加法族の包含";

//2:Markov
i++; markov = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/mathemaru/markov.html";
ttls[i] = "Markov 連鎖";
j = 0;
j++; mpath = j; bns[i][j] = "命題：パスの確率";
j++; mst = j; bns[i][j] = "定義：定常分布";
j++; x = j;

//1:RW
i++; rw1 = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/mathemaru/random-walk-z.html";
ttls[i] = "１次元ランダムウォーク";
j = 0;
j++; returnprob = j; bns[i][j] = "命題：再帰確率は $1$";
j++; y = j;
j++; x = j;

//5:norm-space
i++; norm = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/mathemaru/norm-space.html";
ttls[i] = "ノルム空間";
j = 0;
j++; normisdist = j; bns[i][j] = "ノルム空間は距離空間";

//4:inner-product-space
i++; inprod = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/mathemaru/inner-product-space.html";
ttls[i] = "内積空間";
j = 0;
j++; antilinearity = j; bns[i][j] = "第二成分の反線形性";
j++; inprodisnorm = j; bns[i][j] = "内積空間はノルム空間";
