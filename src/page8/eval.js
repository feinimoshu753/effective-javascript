//eval function
function log(str) {
    window.console.log(str);
}

function demo(a) {
    eval("var b = a");
    return b;
}
window.console.log('demo("hello") //' + demo('hello'));

var b = "global";
function demo1(a) {
    if(a){
        eval("var b = 'local';");
    }
    return b;
}
window.console.log('demo1(true) //' + demo1(true));
window.console.log('demo1(false) //' + demo1(false));

function demo2(b) {
    var a = 'local';
    eval(b);

    return a;
}
window.console.log('demo2(xx) //' + demo2('var a = "eval_local"'));
window.console.log('demo2(xx) //' + demo2('var c = "eval_local"'));

function demo3(b) {
    var a = 'local';
    (function () {
        eval(b);
    })();
    return a;
}
window.console.log('demo3(xx) //' + demo3('var a = "eval_local"'));
window.console.log('demo3(xx) //' + demo3('var c = "eval_local"'));
