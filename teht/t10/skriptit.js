var a = 1.3e5;
document.getElementById("p1").innerHTML = a;

var x = 0.1 + 0.2;
document.getElementById("p2").innerHTML = x;
var y = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById("p3").innerHTML = y;

var luku = "10";
var luku1 = 20;
document.getElementById("p4").innerHTML = luku + luku1;
document.getElementById("p5").innerHTML = luku - luku1;
document.getElementById("p6").innerHTML = luku * luku1;
document.getElementById("p7").innerHTML = luku / luku1;

var omena = 100 / "Omena";
document.getElementById("p8").innerHTML = omena;

var b = 100 / "10";
document.getElementById("p9").innerHTML = b;

var luku2 = 9.656;
c = luku2.toFixed(0)
document.getElementById("p10").innerHTML = c;
d = luku2.toFixed(2)
document.getElementById("p11").innerHTML = d;
e = luku2.toFixed(1)
document.getElementById("p12").innerHTML = e;