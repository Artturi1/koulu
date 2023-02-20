'use strict';

class Kasi extends Pakka {
  constructor() {  //tÃ¤tÃ¤ ei tarvita
    super();  //tÃ¤tÃ¤ kutsutaan automaattisesti
  }

  get summa() {
    return this.kortit.reduce((summa,kortti)=>summa+kortti.arvo,0);
  }

};