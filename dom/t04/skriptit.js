(function () {
    let kappale;
    let tulos;
    let luokat;
    let eka;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        kappale = document.getElementById('kappale');
        tulos = document.getElementById('tulos');
        luokat = document.getElementById('luokat');
        eka = document.getElementById('eka');
        document.getElementById('lisaapun')
            .addEventListener('click', () => lisaa('punainen'));
        document.getElementById('poistapun')
            .addEventListener('click', () => poista('punainen'));
        document.getElementById('lisaasin')
            .addEventListener('click', () => lisaa('sininen'));
        document.getElementById('poistasin')
            .addEventListener('click', () => poista('sininen'));
        document.getElementById('onoff')
            .addEventListener('click', onoff);
        document.getElementById('korvaa')
            .addEventListener('click', korvaa);
        document.getElementById('sisaltaa')
            .addEventListener('click', sisaltaa);
    }
    function lisaa(vari) {
        kappale.classList.add(vari);
        paivitaLuokat();
    }
    function poista(vari) {
        kappale.classList.remove(vari);
        paivitaLuokat();
    }
    function onoff() {
        tulos.textContent = kappale.classList.toggle('punainen');
        paivitaLuokat();
    }
    function korvaa() {
        kappale.classList.replace('punainen', 'sininen');
        paivitaLuokat();
    }
    function sisaltaa() {
        tulos.textContent = kappale.classList.contains('punainen');
        paivitaLuokat();
    }
    function paivitaLuokat() {
        luokat.textContent = kappale.classList;
        eka.textContent = kappale.classList.item(0);
    }
})();