function laske() {
    var luku1 = document.getElementById('luku1').value;
    var luku2 = document.getElementById('luku2').value;
    var laskuToimitus = document.getElementById('laskuToimitus').value;
    var vastaus = document.getElementById('vastaus');
    console.log("se tuli");
    if (laskuToimitus == "plus") {
        vastaus.value = parseInt(luku1) + parseInt(luku2);
    }
    else if (laskuToimitus == "minus") {
        vastaus.value = parseInt(luku1) - parseInt(luku2);
    }

    if (isNaN(vastaus.value) || isNaN(luku1) || isNaN(luku2)) {
        vastaus.value = "ei ole numero";
    }
}