'use strict';

class Kortti {
  constructor(maa, arvo) {
    this.maa = maa;
    this.arvo = arvo;
  }

  toString() {
    return `${this.maa.symboli} ${this.arvo}`;
  }
};