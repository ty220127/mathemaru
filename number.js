//Numbering-Rule
function nr(model,box) {
  document.write("[#" + model + "-" + box + "]")
}

var refs = [];
var ttls = [];
var bns = [];

i = 0;

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
