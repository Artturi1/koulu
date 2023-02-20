'use strict';
//document.querySelectorAll("valitsin")
//document.querySelector("valitsin")
 
document.addEventListener('DOMContentLoaded', alusta);
 
function alusta() {
    console.log([...document.querySelectorAll('p')]);
    console.log(document.querySelector('h1').textContent);
    for (let kappale of document.querySelectorAll('p')) {
        console.log(kappale.textContent);
    }
}