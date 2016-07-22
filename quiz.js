

function popup () {
  alert('both fields must have a value')
}

var spc = [];
var leafs = [];
var finaltree = []

for (i = 9; i >=0; i--) {
 spc.push(' '.repeat(i));
}
//console.log(spc);

for (j = 1; j < 20; j = j + 2) {
 leafs.push('*'.repeat(j));
}
//console.log(leafs);
for (z = 0; z < 10; z++) {
 finaltree.push(spc[z], leafs[z]);
 console.log(finaltree.join(' '));
 finaltree = [];
}
