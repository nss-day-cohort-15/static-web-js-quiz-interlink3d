
var growTree = function() {
  var charT = document.getElementById('char').value;
  var treeHeight = document.getElementById('height').value;

  (function () {
    var spaces = [];
    var leafs = [];
    var finaltree = [];

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
 }())
}
var buttonPress = function (e) {
    if (e.keyCode == 13  && (treeHeight != 0 || charT  != 0)) {
        growTree();
    }
}

var treeHeight = document.getElementById('heightNumber');
var charT = document.getElementById('charType');
var button = document.getElementById('startGrowing').addEventListener('click', growTree);
var enterButton = document.addEventListener('keydown', buttonPress);
