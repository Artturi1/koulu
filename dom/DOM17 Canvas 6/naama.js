'use strict';
class Naama {
    constructor(tyylit) {
        this.tyylit = tyylit;
    }
    piirra(konteksti) {
        this.piirraSuorakaide(konteksti, 'tausta', 100, 100, 200, 200, true);
        this.piirraSuorakaide(konteksti, 'suu', 150, 250, 100, 25, false);
        this.piirraSuorakaide(konteksti, 'nena', 190, 200, 20, 20);
        this.piirraSilma(konteksti, 'silma', 155, 155, 25);
        this.piirraSilma(konteksti, 'silma', 255, 155, 25);
        this.piirraSilma(konteksti, 'iris', 165, 153, 12);
        this.piirraSilma(konteksti, 'iris', 255, 155, 12);
        this.piirraKulmakarva(konteksti, 110, 130);
        this.piirraKulmakarva(konteksti, 210, 130);
    }
    piirraKulmakarva(konteksti, alkuX, alkuY) {
        konteksti.beginPath();
        konteksti.moveTo(alkuX, alkuY);
        konteksti.lineTo(alkuX + 45, alkuY - 20);
        konteksti.lineTo(alkuX + 80, alkuY);
        konteksti.lineWidth = 3;
        konteksti.stroke();
    }
    piirraSilma(konteksti, osa, x, y, sade) {
        konteksti.save();
        konteksti.beginPath();
        konteksti.fillStyle = this.tyylit[osa].vari;
        konteksti.arc(x, y, sade, 0, 2 * Math.PI);
        konteksti.fill();
        if (this.tyylit[osa].viivanLeveys > 0) {
            konteksti.lineWidth = this.tyylit[osa].viivanLeveys;
            konteksti.strokeStyle = this.tyylit[osa].viiva;
            konteksti.stroke();
        }
        konteksti.restore();
    }

    piirraSuorakaide(konteksti, osa, x, y, lev, kork) {
        konteksti.save();
        konteksti.fillStyle = this.tyylit[osa].vari;
        konteksti.fillRect(x, y, lev, kork);
        if (this.tyylit[osa].viivanLeveys > 0) {
            konteksti.lineWidth = this.tyylit[osa].viivanLeveys;
            konteksti.strokeStyle = this.tyylit[osa].viiva;
            konteksti.strokeRect(x, y, lev, kork);
        }
        konteksti.restore();
    }
}