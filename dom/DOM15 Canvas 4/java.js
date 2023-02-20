(function () {
    let piirtoalusta = document.getElementById('piirtoalusta');
    let konteksti = piirtoalusta.getContext('2d');
    const tyylit = {
        naama: {vari: 'lightblue', viiva: 'orange', viivanLeveys: 3},
        suu: { vari: 'red', viiva: 'orange', viivanLeveys: 1 },
        silma: { vari: 'white', viiva: 'black', viivanLeveys: 2 },
        nena: { vari: 'blue', viiva: 'orange', viivanLeveys: 5 },
    };
    piirra(10, 10, 200, 200, tyylit.naama.vari, tyylit.naama.viiva, tyylit.naama.viivanLeveys);

    piirra(30, 30, 50, 50, tyylit.silma.vari, tyylit.silma.viiva, tyylit.silma.viivanLeveys);
    piirra(140, 30, 50, 50, tyylit.silma.vari, tyylit.silma.viiva, tyylit.silma.viivanLeveys);

    piirra(100, 100, 20, 20, tyylit.nena.vari, tyylit.nena.viiva, tyylit.nena.viivanLeveys);

    piirra(60, 150, 100, 25, tyylit.suu.vari, tyylit.suu.viiva, tyylit.suu.viivanLeveys);

    function piirra(x, y, leveys, korkeus, vari, viiva, viivaLeveys) {
        konteksti.strokeStyle = viiva;
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.lineWidth = viivaLeveys;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
})();