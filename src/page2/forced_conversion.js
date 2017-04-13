//examples of forced conversion
document.getElementById('line1').innerText = '5 + true = ' + (5 + true);
document.getElementById('line2').innerText = '7 + 2 = ' + (7 + 2);
document.getElementById('line3').innerText = '"hello" + "world" = ' + ('"hello' + ' world"');
document.getElementById('line4').innerText = '"4" + 6 = "' + ('4' + 6 + '"');
document.getElementById('line5').innerText = '4 + "6" = "' + (4 + '6"');
document.getElementById('line6').innerText = '2 + 3 + "4" = "' + (2 + 3 + '4"');
document.getElementById('line7').innerText = '2 + "3" + 4 = "' + (2 + '3' + 4 + '"');
document.getElementById('line8').innerText = '"12" * 6 = ' + ('12' * 6);
document.getElementById('line9').innerText = '"5" | "2" = ' + ('5' | '2');
document.getElementById('line10').innerText = 'null + 17 = ' + (null + 17);
var a;
document.getElementById('line11').innerText = 'var a;\n a + 3 = ' + (a + 3);

//examples of NaN(not a number)
var x = NaN;
document.getElementById('line12').innerText = 'var x = NaN;\n x === NaN; //' + (x === NaN);
document.getElementById('line13').innerText = 'isNaN("abc") = ' + (isNaN("abc"));
document.getElementById('line14').innerText = 'isNaN(undefined) = ' + (isNaN(undefined));
document.getElementById('line15').innerText = 'isNaN({}) = ' + (isNaN({}));
document.getElementById('line16').innerText = 'isNaN({valueOf : "abc"}) = ' + (isNaN({valueOf:"abc"}));
var b = NaN;
document.getElementById('line16').innerText = 'var b = NaN;\n b !== b; //' + (b !== b);
var c = 'abc';
document.getElementById('line17').innerText = 'var c = "abc";\n c !== c; //' + (c !== c);
var d = undefined;
document.getElementById('line18').innerText = 'var d = undefined;\n d !== d; //' + (d !== d);
var e = {};
document.getElementById('line19').innerText = 'var e = {};\n e !== e; //' + (e !== e);
var f = {valueOf : "abc"};
document.getElementById('line20').innerText = 'var f = {valueOf : "abc"};\n f !== f; //' + (f !== f);

//examples of toString and valueOf
document.getElementById('line21').innerText = '"m" + {toString: function () {return "d"}} = "' + ('m' + {toString: function () {return 'd'}} + '"');
document.getElementById('line22').innerText = '3 * {valueOf: function () {return "5"}} = ' + (3 * {valueOf: function () {return "5"}});
var obj = {
    toString: function () {
        return "[object MyObject]";
    },
    valueOf: function () {
        return 13;
    }
};
document.getElementById('line23').innerText = 'var obj = {\ntoString: function () {\nreturn "[object MyObject]";\n},\nvalueOf: function () {\nreturn 13;\n}\n}; \n"object: " + obj= ' + ('"object: ' + obj + '"');

//examples of truthiness
function point(x,y) {
    if(!x){
        x = 2;
    }
    if(!y){
        y = 3;
    }
    return {x:x,y:y};
}
document.getElementById('line24').innerText = 'function point(x,y) {\nif(!x){\nx = 2;\n}\nif(!y){\ny = 3;\n}\nreturn {x:x,y:y};\n}\n point(0,0); // ' + (JSON.stringify(point(0,0)));

function point2(x,y) {
    if(typeof x === 'undefined'){
        x = 2;
    }
    if(typeof y === 'undefined'){
        y = 3;
    }
    return {x:x,y:y};
}
document.getElementById('line25').innerText = 'function point2(x,y) {\nif(typeof x === "undefined"){\nx = 2;\n}\nif(typeof y === "undefined"){\ny = 3;\n}\nreturn {x:x,y:y};\n}\n point2(0,0); // ' + (JSON.stringify(point2(0,0)));
document.getElementById('line26').innerText = 'point2(); // ' + (JSON.stringify(point2()));
