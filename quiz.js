document.getElementById('startGrowing').addEventListener('click', check);
document.addEventListener('keydown', buttonPress);

function check () {
    var charT = document.getElementById('char').value;
    var treeHeight = document.getElementById('height').value;

  if (charT === '' || treeHeight === ''){
        alert('must enter value');
    }

  var growTree = {
    charT: charT,
    treeHeight: treeHeight
  };

  final(growTree);
}

  function final(growTree) {
    var spaces = [];
    var leafs = [];
    var finaltree = [];

    for (i = growTree.treeHeight; i >= 0; i--) {
      spaces.push(' '.repeat(i));
    }

    for (j = 1; j < (growTree.treeHeight * 2); j = j + 2) {
      leafs.push(growTree.charT.repeat(j));
    }

    for (k = 0; k < growTree.treeHeight; k++) {
      finaltree.push(spaces[k], leafs[k]);
      console.log(finaltree.join(' '));
      finaltree = [];
    }
 }

  function buttonPress (e) {
    if (e.keyCode == 13) {
        check()
    }
}
