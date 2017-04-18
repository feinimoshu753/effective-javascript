//variable scope
function log(str) {
    window.console.log(str);
}

var i,n,sum; //全局变量
function averageScore(teams){
    sum = 0;
    n = teams.length;
    for(i=0;i<n;i++){
        sum += score(teams[i]);
    }
    return sum / n;
}

var i,n,sum; //相同的全局变量
function score(team){
    sum = 0;
    n = team.players.length;
    for(i=0;i<n;i++){
        sum += team.players[i].score;
    }
    return sum;
}

var teams = [{players:[{score:5},{score:3},{score:6}]},{players:[{score:12},{score:1},{score:7}]}];
log(averageScore(teams));

function averageScore2(teams){
    var i,n,sum; //局部变量
    sum = 0;
    n = teams.length;
    for(i=0;i<n;i++){
        sum += score2(teams[i]);
    }
    return sum / n;
}

function score2(team){
    var i,n,sum; //局部变量
    sum = 0;
    n = team.players.length;
    for(i=0;i<n;i++){
        sum += team.players[i].score;
    }
    return sum;
}

var teams2 = [{players:[{score:5},{score:3},{score:6}]},{players:[{score:12},{score:1},{score:7}]}];
log(averageScore2(teams2));

function test(teams){
    for(var i = 0; i < teams.length ; i++){
        log(i);
    }
    log(i); // 3
}
test([1,2,3]);

function swap(array,i,j){
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
swap([5,6,7,8],2,3);
log(temp);

function swap2(array,i,j){
    var temp2 = array[i];
    array[i] = array[j];
    array[j] = temp2;
}
swap2([5,6,7,8],2,3);
log(this.temp2);