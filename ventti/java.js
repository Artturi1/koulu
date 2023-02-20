function createRandomDeck() {
    let kortit = [];
    let maa = "";
    for (let x = 1; x <= 4; x++) {
        if (x == 1) {
            maa = "&hearts;";
        }
        if (x == 2) {
            maa = "&clubs;";
        }
        if (x == 3) {
            maa = "&diams;";
        }
        if (x == 4) {
            maa = "&spades;";
        }
        for (let i = 1; i <= 13; i++) {
            kortit.push([maa, i]);
        }
    }
    return kortit.sort((a, b) => 0.5 - Math.random());
}

function peli() {
    var pakka = createRandomDeck();
    var pelaajanPisteet = 0;
    document.getElementById("alert_voitto").style.display = "none"
    for (var i = 1; i < 6; i++) {
        document.querySelector("#pelaaja" + i +" .ylempi_arvo").innerHTML = "";
        document.querySelector("#pelaaja" + i +" .alempi_arvo").innerHTML = "";
        document.querySelector("#pelaaja" + i +" .keski_merkki").innerHTML = "";
        document.querySelector("#pelaaja" + i +" .keski_merkki").style.color = "black";
        document.querySelector("#jakaja" + i +" .ylempi_arvo").innerHTML = "";
        document.querySelector("#jakaja" + i +" .alempi_arvo").innerHTML = "";
        document.querySelector("#jakaja" + i +" .keski_merkki").innerHTML = "";
        document.querySelector("#jakaja" + i +" .keski_merkki").style.color = "black";
    }
    function voitto(voittaja) {
        if (voittaja == "pelaaja") {
            document.getElementById("alert_voitto").innerHTML = "pelaaja voitti";
            document.getElementById("alert_voitto").style.display = "inline-block"
            button1.removeEventListener("click", function() {
                nosta();
            });
              button2.removeEventListener("click", function() {
                jakajaNostaa();
            });
            button1.style.display = 'none';
            button2.style.display = 'none';
        }
        else if (voittaja == "jakaja") {
            document.getElementById("alert_voitto").innerHTML = "jakaja voitti";
            document.getElementById("alert_voitto").style.display = "inline-block"
            button1.removeEventListener("click", function() {
                nosta();
            });
              button2.removeEventListener("click", function() {
                jakajaNostaa();
            });
            button1.style.display = 'none';
            button2.style.display = 'none';
        }
    }
    console.log(pakka);
    console.log(pakka[0][0]);
    function nosta() {
        for (var a = 1; a < 6; a++) {
            if (document.querySelector("#pelaaja" + a +" .ylempi_arvo").innerHTML == "") {
                document.querySelector("#pelaaja" +  a +" .ylempi_arvo").innerHTML = pakka[0][1];
                document.querySelector("#pelaaja" + a +" .alempi_arvo").innerHTML = pakka[0][1];
                document.querySelector("#pelaaja" + a +" .keski_merkki").innerHTML = pakka[0][0];
                if (pakka[0][0] == "&diams;" || pakka[0][0] == "&hearts;") {
                    document.querySelector("#pelaaja" + a +" .keski_merkki").style.color = "red";
                }
                pelaajanPisteet += parseInt(document.querySelector("#pelaaja" +  a +" .ylempi_arvo").innerHTML);
                document.getElementById("test").innerHTML = pelaajanPisteet;
                if (pelaajanPisteet == 21) {
                    voitto("pelaaja")
                      button1.style.display = 'none';
                      button2.style.display = 'none';
                    
                 }
                else if (pelaajanPisteet > 21) {
                    voitto("jakaja")
                    button1.style.display = 'none';
                    button2.style.display = 'none';
                }
                
                if (document.querySelector("#pelaaja5 .ylempi_arvo").innerHTML != "" && pelaajanPisteet < 22) {
                        voitto("pelaaja");
                          button1.style.display = 'none';
                          button2.style.display = 'none';
                       button1.removeEventListener("click", function() {
                          nosta();
                      });
                       button2.removeEventListener("click", function() {
                          jakajaNostaa();
                      }
                          );
                }
                pakka.shift();
                console.log(pakka);
                break;
            }
        }
    }
        
    var jakajanPisteet = 0;
    function jakajaNostaa() {
        for (var c = 1; c < 6; c++) {
            if (document.querySelector("#jakaja" + c +" .ylempi_arvo").innerHTML == "") {
                console.log("jakaja paska " + c)
                document.querySelector("#jakaja" +  c +" .ylempi_arvo").innerHTML = pakka[0][1];
                document.querySelector("#jakaja" + c +" .alempi_arvo").innerHTML = pakka[0][1];
                document.querySelector("#jakaja" + c +" .keski_merkki").innerHTML = pakka[0][0];
                if (pakka[0][0] == "&diams;" || pakka[0][0] == "&hearts;") {
                    document.querySelector("#jakaja" + c +" .keski_merkki").style.color = "red";
                }
                jakajanPisteet += parseInt(document.querySelector("#jakaja" +  c +" .ylempi_arvo").innerHTML);
                document.getElementById("test2").innerHTML = jakajanPisteet;
                if (jakajanPisteet >= pelaajanPisteet && jakajanPisteet < 21 || jakajanPisteet == 21) {
                    voitto("jakaja");
                }
                else if (jakajanPisteet > 21) {
                    voitto("pelaaja")
                }
                if (document.querySelector("#jakaja5 .ylempi_arvo").innerHTML != "" && jakajanPisteet < 22) {
                    voitto("jakaja");
                }
                pakka.shift();
                console.log(pakka);
                break;
            }
        }
    }
    document.getElementById("button1").addEventListener("click", function() {
        nosta();
    }
        );
    document.getElementById("button2").addEventListener("click", function() {
        jakajaNostaa();
    }
        );
    nosta();
    nosta();
}