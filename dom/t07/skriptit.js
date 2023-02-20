'use strict';
(function () {
    let summa = 0;
    let taulukko;
    let tulos;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        taulukko = document.getElementById('taulukko');
        tulos = document.getElementById('summa');
        let nro = 0;
        for (let rivi of taulukko.children) {
            for (let solu of rivi.children) {
                solu.addEventListener('click', () => {
                    if (solu.hasAttribute('class')) {
                        solu.removeAttribute('class');
                        summa -= +solu.textContent;
                    } else {
                        solu.setAttribute('class', 'valittu');
                        summa += +solu.textContent;
                    }
                    tulos.textContent = summa;
                    //console.log(solu.getAttribute('class'));
                });
                solu.textContent = nro++;
            }
        }
    }
})();