//primitive type is better than wrapper object
function log(str) {
    window.console.log(str);
}

var str = new String("learn");
log('str + " javascript" = ' + str + " javascript");
log('str[2] = ' + str[2]);
log('typeof "learn" = ' + (typeof "learn"));
log('typeof str = ' + (typeof str));

var str1 = new String("learning");
var str2 = new String("learning");
log('str1 === str2 // ' + (str1 === str2));
log('str1 == str2 // ' + (str1 == str2));

log('"learn".toUpperCase() = ' + "learn".toUpperCase());
"learn".testProperty = 3;
log("learn".testProperty);
