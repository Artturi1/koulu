'use strict';

(function () {
    let pelaajanPisteet = 0;
    let jakajanPisteet = 0;
    let pelaajanKortit = 0;
    let jakajanKortit = 0;
   

    let pakka = Pakka.luoPakka();
    pakka.sekoita();
    console.log(pakka);
    let kasi = new Kasi();
    kasi.lisaaKortti(pakka.otaKortti());
  
    

    

    function näytäKortti(ID, korttiInfo) {
        let numero1 = document.createElement("p");
        numero1.setAttribute("class", "numero1");
        numero1.appendChild(document.createTextNode(korttiInfo.arvo));

        let symboliInfo = document.createTextNode(korttiInfo.maa.symboli);
        let symboli = document.createElement("p");
        if (korttiInfo.maa.vari == 'punainen') {
            symboli.setAttribute("class", "punainenSymboli");
        } else {
            symboli.setAttribute("class", "mustaSymboli");
        }
        symboli.appendChild(symboliInfo);

        let numero2 = document.createElement("p");
        numero2.setAttribute("class", "numero2");
        numero2.appendChild(document.createTextNode(korttiInfo.arvo));


        let kortti = document.createElement("div");
        kortti.setAttribute("class", "kortti");
        kortti.appendChild(numero1);
        kortti.appendChild(symboli)
        kortti.appendChild(numero2);
        document.getElementById(ID).appendChild(kortti);
        if (ID = "pelaaja") {
            pelaajanKortit += 1;
        } else {
            jakajanKortit += 1;
        }
        tarkista();
    }

    function voitto() {
        document.getElementById("nosta").removeEventListener("click", nostaKortti);
        document.getElementById("jaa").removeEventListener("click", jakajanKortti);

        document.getElementById("loppu1").innerHTML = "voitit";
        document.getElementById("loppu1").style.display = "block";
        document.getElementById("loppu1").addEventListener("click", uusiPeli);

        console.log("voitto");
    }

    function havio() {
        document.getElementById("nosta").removeEventListener("click", nostaKortti);
        document.getElementById("jaa").removeEventListener("click", jakajanKortti);

        document.getElementById("loppu1").innerHTML = "hävisit";
        document.getElementById("loppu1").style.display = "block";
        document.getElementById("loppu1").addEventListener("click", uusiPeli);
        console.log("häviö");
        nosta.removeEventListener("click", function() {
            nostaKortti();
        });
        jaa.removeEventListener("click", function() {
            jakajanKortti();
        });
    }

    function tarkista() {
        if (jakajanKortit != 5) {
            if (pelaajanPisteet == 21 || pelaajanKortit == 5 || jakajanPisteet > 21) {
                voitto()
            }
        }
        if (pelaajanKortit != 5) {
            if (pelaajanPisteet > 21 || jakajanKortit == 5 || jakajanPisteet == 21 || jakajanPisteet >= pelaajanPisteet) {
                havio()
            }
        }
        else if (jakajanKortit == 5 || pelaajanKortit == 5) {
            document.getElementById("nosta").removeEventListener("click", nostaKortti);
            document.getElementById("jaa").removeEventListener("click", jakajanKortti);
            console.log("viisi korttia");
        }
    }

   
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
 
        kasi.lisaaKortti(pakka.otaKortti());
        pelaajanPisteet += kasi.summa;
        

        document.getElementById("pisteet").innerHTML = pelaajanPisteet;
        
        let uusiKortti = kasi.otaKortti();
        console.log(uusiKortti);
        näytäKortti("pelaaja", uusiKortti);

        uusiKortti = kasi.otaKortti();
        console.log(uusiKortti);
        näytäKortti("pelaaja", uusiKortti);

        
        document.getElementById("nosta").addEventListener("click", nostaKortti);
        document.getElementById("jaa").addEventListener("click", jakajanKortti);
        document.getElementById("alusta").addEventListener("click", uusiPeli);
        tarkista();

    }
    function nostaKortti() {
    
        kasi.lisaaKortti(pakka.otaKortti());
        pelaajanPisteet += kasi.summa;
        

        document.getElementById("pisteet").innerHTML = pelaajanPisteet;
        
        console.log(kasi);
        console.log(pakka);
        let uusiKortti = kasi.otaKortti();
        console.log(uusiKortti);
        näytäKortti("pelaaja", uusiKortti);
        
        console.log("nosta");
    }
    function jakajanKortti() {
        
        kasi.lisaaKortti(pakka.otaKortti());
        jakajanPisteet += kasi.summa;
        

        document.getElementById("pisteet2").innerHTML = jakajanPisteet;
        
        console.log(kasi);
        console.log(pakka);
        let uusiKortti = kasi.otaKortti();
        console.log(uusiKortti);
        näytäKortti("jakaja", uusiKortti);
        
        console.log("nosta");
    }
    function uusiPeli() {
        console.log("uudestaan");
        location.reload();
    }
})();