'use strict';
(function () {
    const satunnaisluku = ylaraja => Math.floor(Math.random() * ylaraja);
    const hiekka = 'orange';
    let piirtoalusta;
    let konteksti;
    let pinta = 0;
    let jyvat = [[2, 5, 3, 2], [1, 3], [1, 1], [2, 5]];
    let ajastin;
    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');

        ajastin = setInterval(function () {
            pinta++;
            piirra();
        }, 100);
    }

    function piirra() {
        if (pinta > 100) {
            clearInterval(ajastin);
            alert('loppu');
            return;
        }
        konteksti.clearRect(0, 0, piirtoalusta.width, piirtoalusta.height);
        taytaTiimalasi(10, 10, 100, pinta);
        terveysPalkki(150, 10, 50, 100, pinta);
    }

    function terveysPalkki(x, y, leveys, korkeus, pinta) {
        konteksti.save();
        konteksti.translate(x, y);
        konteksti.beginPath();
        konteksti.rect(0, 0, leveys, korkeus);
        konteksti.clip();
        konteksti.stroke();
        konteksti.fillStyle = 'green';
        konteksti.fillRect(0, pinta, leveys, korkeus);
        konteksti.restore();
    }
    function piirraTiimalasi(x, y, koko) {
        konteksti.save();
        konteksti.translate(x, y);
        konteksti.beginPath();
        konteksti.moveTo(0, 0);
        konteksti.lineTo(koko, 0);
        konteksti.lineTo(0, 2 * koko);
        konteksti.lineTo(koko, 2 * koko);
        konteksti.closePath();
        konteksti.strokeStyle = 'black';
        konteksti.lineWidth = 4;
        konteksti.lineCap = 'square';
        konteksti.lineJoin = 'miter';
        konteksti.stroke();
        konteksti.restore();
    }
    function taytaTiimalasi(x, y, leveys, pinta) {
        konteksti.save();
        konteksti.translate(x, y);
        piirraTiimalasi(0, 0, leveys);
        konteksti.clip();
        konteksti.fillStyle = hiekka;
        konteksti.fillRect(0, pinta, leveys, leveys - pinta);
        piirraJyvat(leveys / 2, leveys, 2 * leveys)
        piirraKomio(0, 2 * leveys - pinta, leveys);
        piirraTiimalasi(0, 0, leveys);
        konteksti.restore();
    }
    function piirraKomio(x, y, pohjanLeveys) {
        konteksti.save();
        konteksti.beginPath();
        konteksti.moveTo(x + pohjanLeveys / 2, y);
        konteksti.lineTo(x + pohjanLeveys, y + pohjanLeveys);
        konteksti.lineTo(x, y + pohjanLeveys);
        konteksti.moveTo(x + pohjanLeveys / 2, y);
        konteksti.fill();
        konteksti.restore();
    }
    function piirraJyvat(x, y, pudotuskorkeus) {
        konteksti.save();
        konteksti.beginPath();
        konteksti.moveTo(x, y);
        konteksti.lineTo(x, pudotuskorkeus);
        konteksti.strokeStyle = hiekka;
        konteksti.lineWidth = 2;
        konteksti.setLineDash(jyvat[satunnaisluku(jyvat.length)]);
        konteksti.stroke();
        konteksti.restore();
    }

})();

