function main() {
    let kortit = [];
    let maa = "";
    for (let x = 1; x <= 4; x++) {
        if (x == 1) {
            maa = "hertta";
        }
        if (x == 2) {
            maa = "risti";
        }
        if (x == 3) {
            maa = "ruutu";
        }
        if (x == 4) {
            maa = "pata";
        }
        for (let i = 1; i <= 13; i++) {
            kortit.push([maa, i]);
        }
    }
    document.getElementById("p1").innerHTML = kortit.join(", ");
    var randomized = kortit.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("p2").innerHTML = randomized.join(", ");
    let arvo = kortit[0][1]; //ensimmÃ¤isen kortin arvo
    console.log(arvo)
    document.getElementById("luku1").innerHTML = arvo;
    document.getElementById("luku2").innerHTML = arvo;
    let maakoodi = kortit[0][0]; //ensimmÃ¤isen kortin maa
    if (maakoodi == "hertta") {
        document.getElementById("muoto").innerHTML = "&hearts;";
        document.getElementById("muoto").style.color = "red";
    }
    if (maakoodi == "risti") {
        document.getElementById("muoto").innerHTML = "&clubs;";
    }
    if (maakoodi == "ruutu") {
        document.getElementById("muoto").innerHTML = "&diams;";
        document.getElementById("muoto").style.color = "red";
    }
    if (maakoodi == "pata") {
        document.getElementById("muoto").innerHTML = "&spades;";
    }
}