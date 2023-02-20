let aakkoset = "ABCDEFGHIJKLMNOPQRSTUVWXYZÃ…Ã„Ã–";
document.getElementById("määrä").innerHTML = aakkoset.length;

let teksti = "Ohjelmistokehittäjä osaa ohjelmoida, hyödyntää rajapintoja, käsitellä tietoa sekä käyttää versionhallintaa. Ohjelmistokehitystiimin jäsenenä toimiessaan hän kommunikoi asiakkaan kanssa, suunnittelee ohjelmiston toteutuksen ja varmistaa toteutettavien toimintojen laadun.";

document.getElementById("teksti").innerHTML = teksti;
let sijainti = teksti.indexOf("ohjelmoida");
let sijainti2 = teksti.indexOf(".");
let pilkottu = teksti.slice(sijainti, sijainti2 + 1);
document.getElementById("slice").innerHTML = pilkottu;

let pilkottu2 = teksti.slice(0, 107);
document.getElementById("slice2").innerHTML = pilkottu2;

let pilkottu3 = teksti.slice(107);
document.getElementById("slice3").innerHTML = pilkottu3;

function vaihto() {
    let vaihto = pilkottu2.replace("versionhallintaa", "versionhallintaa (esimerkiksi GitHub)");
    document.getElementById("slice2").innerHTML = vaihto;
}
