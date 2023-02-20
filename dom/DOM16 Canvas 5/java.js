'use strict';
(function () {
    let piirtoalusta;

    const tyylit = {
        suu: { vari: 'red', viiva: 'orange', viivanLeveys: 0 },
        silma: { vari: 'white', viiva: 'black', viivanLeveys: 2 },
        iris: { vari: 'black', viiva: 'black', viivanleveys: 0 },
        nena: { vari: 'blue', viiva: 'orange', viivanLeveys: 5 },
        tausta: { vari: 'cyan', viiva: 'orange', viivanLeveys: 5 }
    };

    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        let konteksti = piirtoalusta.getContext('2d');
        let naama = new Naama(tyylit);
        naama.piirra(konteksti);
        konteksti.fillStyle = 'rgba(23,45,200,0.5)';
        konteksti.font = '40pt Serif';
        konteksti.fillText("perusnaama", 10, 50);

    }
})();