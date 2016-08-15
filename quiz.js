document.getElementById('startGrowing').addEventListener('click', final);
document.addEventListener('keydown', buttonPress);

var growTree = {}

  function final(growTree) {
    var spaces = [];
    var leafs = [];
    var finaltree = [];

    charT = document.getElementById('char').value,
    treeHeight = document.getElementById('height').value  

    if (charT === '' || treeHeight === ''){
        alert('must enter value');
    }

    for (i = treeHeight; i >= 0; i--) {
      spaces.push(' '.repeat(i));
    }

    for (j = 1; j < (treeHeight * 2); j = j + 2) {
      leafs.push(charT.repeat(j));
    }

    for (k = 0; k < treeHeight; k++) {
      finaltree.push(spaces[k], leafs[k]);
      console.log(finaltree.join(' '));
      finaltree = [];
    }
 }

  function buttonPress (e) {
    if (e.keyCode == 13) {
        final()
    }
}
