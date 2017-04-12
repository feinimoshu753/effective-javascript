//all numbers are type of number
document.getElementById('line1').innerText = 'typeof 10: ' + typeof 10;
document.getElementById('line2').innerText = 'typeof 15.8: ' + typeof 15.8;
document.getElementById('line3').innerText = 'typeof -30.2: ' + typeof -30.2;

//float calculation
document.getElementById('line4').innerText = '0.5 * 1.7 = ' + (0.5 * 1.7);
document.getElementById('line5').innerText = '-20 + 35 =  ' + (-20 + 35);
document.getElementById('line6').innerText = '18 - 3.65 =  ' + (18 - 3.65);
document.getElementById('line7').innerText = '2.8 / 4 =  ' + (2.8 / 4);
document.getElementById('line8').innerText = '29 % 5 =  ' + (29 % 5);

//bit operation
document.getElementById('line9').innerText = '5 | 8 = ' + (5 | 8);
document.getElementById('line10').innerText = '(5).toString(2) = ' + (5).toString(2);
document.getElementById('line11').innerText = '(8).toString(2) = ' + (8).toString(2);
document.getElementById('line12').innerText = 'parseInt("1101",2) = ' + parseInt("1101",2);

//inaccurate float
document.getElementById('line13').innerText = '0.2 + 0.4 = ' + (0.2 + 0.4);
document.getElementById('line14').innerText = '0.5 + 0.4 = ' + (0.5 + 0.4);
document.getElementById('line15').innerText = '(0.2 + 0.4) + 0.3 = ' + ((0.2 + 0.4) + 0.3);
document.getElementById('line16').innerText = '0.2 + (0.4 + 0.3) = ' + (0.2 + (0.4 + 0.3));


