var nimet = ["Tapio", "Leela", "Matti", "Antti"]
document.getElementById("p1").innerHTML = nimet;

document.getElementById("p2").innerHTML = nimet[2];

document.getElementById("p3").innerHTML = nimet.length;

document.getElementById("p4").innerHTML = nimet.at(-1);

nimet.push("Pekka");
document.getElementById("p5").innerHTML = nimet;

document.getElementById("p6").innerHTML = nimet.join(" ");

nimet.splice(2, 1, "Liisa", "Laila")
document.getElementById("p7").innerHTML = nimet;

nimet.sort()
document.getElementById("p8").innerHTML = nimet;

var numerot = [1,7,45,32,27,86]
numerot.sort(function(a, b){return a - b})
document.getElementById("p9").innerHTML = numerot;

numerot.sort(function(a, b){return 0.5 - Math.random()});
document.getElementById("p10").innerHTML = numerot;

const min = Math.min(...numerot)
const max = Math.max(...numerot)
const vastaus = [min, max]
document.getElementById("p11").innerHTML = vastaus.join("   ");     