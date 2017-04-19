//closure
function log(str) {
    window.console.log(str);
}

function funA() {
    var name = "hello";
    function hello() {
        log(name);
    }
    return hello;
}
var funB = funA();
funB();

function funA1(firstName) {
    function displayName(lastName) {
        window.console.log(firstName + ' ' + lastName);
    }
    return displayName;
}

var funB1 = funA1('jack');
funB1('lee'); //"jack lee"
funB1('young'); //"jack young"

var funC1 = funA1('louise');
funC1('nancy'); // "louise nancy"
funC1('mark');  // "louise mark"

function myFunction(){
    var value = 'aaa';
    return{
        set: function (newValue) {
            value = newValue;
        },
        get: function () {
            return value;
        },
        type: function () {
            return typeof value;
        }
    }
}

var func = myFunction();
log(func.type());
log(func.get());
func.set(22);
log(func.type());
log(func.get());

var imgs = document.getElementsByTagName('img');
// for(var i=0;i<imgs.length;i++){
//     imgs[i].onclick = function () {
//         window.console.log(imgs[i].getAttribute('src'));
//     };
// }

for(var i=0;i<imgs.length;i++){
    imgs[i].onclick = (function(j){
        return function () {
            window.console.log(imgs[j].getAttribute('src'));
        }
    })(i);
}