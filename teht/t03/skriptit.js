function sukunimi() {
    var person = prompt('Anna sukunimesi', '.');
    if (person != null) {
        document.getElementById("terve").innerHTML =
        "terve "+person;
    }
}
