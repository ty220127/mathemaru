//Numbering-Rule
function nr(model,box) {
  document.write("[#" + model + "-" + box + "]")
}

var refs = [];
var ttls = [];
var bns = [];

i = 0;

//3:measurable_space
i++; measurable = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/mathemaru/sigma_algebra.html";
ttls[i] = "可測空間";
j = 0;
j++; measurable_power = j; bns[i][j] = "例：冪集合は可測空間を成す";
j++; measurable_minimum = j; bns[i][j] = "例：最小の $\sigma$ 加法族による可測空間";
j++; measurable_intersection = j; bns[i][j] = "命題：可測集合の共通部分の可測性";
j++; measurable_limit = j; bns[i][j] = "命題：上（下）極限集合の可測性";
j++; measurable_difference = j; bns[i][j] = "命題：可測集合の差の可測性";
j++; sigma_intersection = j; bns[i][j] = "命題：共通部分による $\sigma$ 加法族";
j++; sigma_generation = j; bns[i][j] = "例：$\sigma$ 加法族の生成";
j++; sigma_gen_unique = j; bns[i][j] = "例：$\sigma$ 加法族の生成の一意性";
j++; sigma_gen_inclusion = j; bns[i][j] = "例：生成される $\sigma$ 加法族の包含";

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
