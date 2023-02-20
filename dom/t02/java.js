function tulostaSelain() {
    let selaimet = document.getElementsByName('selain');
    let valittu;

    for (let i = 0; i < selaimet.length; i++) {
        if (selaimet[i].checked) {
            valittu = selaimet[i].value;
        }

        document.getElementById('tulosta').innerHTML = valittu;
    }
}