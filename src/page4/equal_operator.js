//avoid using "==" operator for mixed types
function log(str) {
    window.console.log(str);
}

log('"1.0e0" == {valueOf: function () { return true;}} //' + ("1.0e0" == {valueOf: function () { return true;}}));
log('null == undefined // '+ (null == undefined));
log('null == "sss" // '+ (null == "sss"));
log('undefined == "sss" // '+ (undefined == "sss"));
log('undefined == NaN // '+ (undefined == NaN));
log('undefined == true // '+ (undefined == true));
log('undefined == 1 // '+ (undefined == 1));

var date = new Date("2017/4/15");
log('date == "2017/4/15" //' + (date == "2017/4/15"));
log('date.toDateString() = ' + date.toDateString());