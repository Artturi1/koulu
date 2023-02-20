const henkilo =
{
    etuNimi: "K",
    sukuNimi: "P",
    ika: 35,
    kokoNimi: function() { return `${this.etuNimi} ${this.sukuNimi}` }
}
console.log(henkilo.kokoNimi());  // K P

const henkilo2 = new Object();
henkilo2.etuNimi = "K";
henkilo2.sukuNimi = "P";
henkilo2.ika = 35;
henkilo2.kokoNimi = function() { return `${this.etuNimi} ${this.sukuNimi}` };

for (let x in henkilo) {
    console.log(henkilo[x]);
  } // x on tÃ¤ssÃ¤ apumuuttuja

  henkilo.pituus = 160; // lisÃ¤tÃ¤Ã¤n kenttÃ¤ pituus ja annetaan sille arvo 160
  delete henkilo.ika;   // tai delete henkilo["ika"];

  let viesti = "hei!";
console.log(viesti.toUpperCase()); // HEIPÃ„ HEI!

const henkilo3 =
{
    etuNimi: "K",
    sukuNimi: "P",
    ika: 35,
    get kokoNimi() {
        return this.etuNimi + " " + this.sukuNimi;
    }
}
console.log(henkilo3.kokoNimi);  // K P

const henkilo4 =
{
    etuNimi: "K",
    sukuNimi: "P",
    ika: 35,
    get kokoNimi() {
        return this.etuNimi + " " + this.sukuNimi;
    },
    set nuorenna(luku) {
        this.ika -= luku;
    }
}
console.log(henkilo4.kokoNimi);  // K P
henkilo4.nuorenna = 2;
console.log(henkilo4.ika); // 33

function Henkilo(etu, suku, ika) {
    this.etuNimi = etu;
    this.sukuNimi = suku;
    this.ika = ika;
}

const kafka = new Henkilo("K", "P", 33);
const jokunen = new Henkilo("jaro", "kari", 12);

function Henkilo2(etu, suku, ika) {
    this.etuNimi = etu;
    this.sukuNimi = suku;
    this.ika = ika;
    this.kokoNimi = function() {return this.etuNimi + " " + this.sukuNimi;};
}