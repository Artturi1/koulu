"use strict";
x = 3.14;

function tarkistus() {
    var x = document.forms["sähköposti"]["sähköposti1"].value;
    var pattern = /@/;
    if (pattern.test(x) == false) {
        alert("Sähköposti väärässä muodossa (@-merkki puuttuu).");
        return false;
    }
}