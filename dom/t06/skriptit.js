'use strict';

(function() {
    let tilataulu;
    document.addEventListener('DOMContentLoaded', muodostaPeli);
    function muodostaPeli() {
        tilataulu = [false, false, false, false, false];
        let painikkeet = document.getElementById('painikkeet');
        for (let i = 0; i < tilataulu.length; i++) {
            let td = document.createElement('td');
            td.addEventListener('click', e => paivitaTila(e.target, i));
            painikkeet.appendChild(td);
        }
    }

    function paivitaTila(elementti, ind) {
        tilataulu[ind] = !tilataulu[ind];
        
        if (tilataulu[ind]) {
            elementti.classList.add('kaannetty');
        } else {
            elementti.classList.remove('kaannetty');
        }
    }
})();