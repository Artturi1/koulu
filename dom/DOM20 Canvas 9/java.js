console.log("moi");
let piirtoalusta = document.getElementById('piirtoalusta');
let konteksti = piirtoalusta.getContext('2d');
    

viiva(50, 165, 50, 270);
viiva(50, 270, 350, 270);


konteksti.font = "10px Arial";
konteksti.fillText("100%", 20, 170);


piirra(80, 170, 50, 100, "white", "black", 4);
piirra(180, 170, 50, 100, "white", "black", 4);
piirra(280, 170, 50, 100, "white", "black", 4);

function viiva(xMistä, yMistä, xMihin, yMihin) {
    konteksti.moveTo(xMistä, yMistä);
    konteksti.lineTo(xMihin, yMihin);
    konteksti.stroke();
}
function piirra(x, y, leveys, korkeus, vari, viiva, viivaLeveys) {
    konteksti.strokeStyle = viiva;
    konteksti.fillStyle = vari;
    konteksti.fillRect(x, y, leveys, korkeus);
    konteksti.fillStyle = vari;
    konteksti.fillRect(x, y, leveys, korkeus);
    if (viiva != "") {
        konteksti.lineWidth = viivaLeveys;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
}


function nayta() {
    let p1 = document.getElementById("i1").value - 1;
    let p2 = document.getElementById("i2").value - 1;
    let p3 = document.getElementById("i3").value - 1;
    let a1 = 100;
    let a2 = 100;
    let a3 = 100;
    console.log(p1 + p2 + p3 + 3);
    if (p1 + p2 + p3 + 3 == 100) {
        f1();
        f2();
        f3();
    } else {
        alert("error: (luvut eivät ole yhteensä 100)");
    }
    function f1() {
        console.log("f1");
        if (a1 == p1) {
            return
        }

        konteksti.beginPath();
        konteksti.rect(80, 270, 50, -100);
        konteksti.fillStyle = "white";
        konteksti.fill();


        konteksti.beginPath();
        konteksti.rect(80, 270, 50, a1-a1*2);
        konteksti.fillStyle = "green";
        konteksti.fill();
        a1 = a1 - 1;
        setTimeout(f1, 9);        
    }
    function f2() {
        console.log("f2");
        if (a2 == p2) {
            return
        }

        konteksti.beginPath();
        konteksti.rect(180, 270, 50, -100);
        konteksti.fillStyle = "white";
        konteksti.fill();


        konteksti.beginPath();
        konteksti.rect(180, 270, 50, a2-a2*2);
        konteksti.fillStyle = "blue";
        konteksti.fill();
        a2 = a2 - 1;
        setTimeout(f2, 9);        
    }
    function f3() {
        console.log("f3");
        if (a3 == p3) {
            return
        }

        konteksti.beginPath();
        konteksti.rect(280, 270, 50, -100);
        konteksti.fillStyle = "white";
        konteksti.fill();


        konteksti.beginPath();
        konteksti.rect(280, 270, 50, a3-a3*2);
        konteksti.fillStyle = "red";
        konteksti.fill();
        a3 = a3 - 1;
        setTimeout(f3, 9);        
    }

    //if (p1 <= 100 && p2 <= 100 && p3 <= 100) {
    //    konteksti.beginPath();
    //    konteksti.rect(80, 270, 50, p1-p1*2);
    //    konteksti.fillStyle = "green";
    //    konteksti.fill();
    //
    //    konteksti.beginPath();
    //    konteksti.rect(180, 270, 50, p2-p2*2);
    //    konteksti.fillStyle = "blue";
    //    konteksti.fill();
    //
    //    konteksti.beginPath();
    //    konteksti.rect(280, 270, 50, p3-p3*2);
    //    konteksti.fillStyle = "red";
    //    konteksti.fill();
    //}
};