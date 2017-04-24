//named function expression
function log(str) {
    window.console.log(str);
}

var funB = function search(tree,key){
    if(!tree){
        return null;
    }
    if(tree.key === key){
        return tree.value;
    }
    return search(tree.left,key) || search(tree.right,key)
}
var tree = {key: 'a',value: 1 ,left: {key: 'b',value: 2},right: {key : 'c', value: 3}};
log(funB(tree,'b'));
log(search(tree,'b'));