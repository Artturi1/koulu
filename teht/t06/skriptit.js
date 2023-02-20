let nimi = "Artturi", luku = 20;
document.getElementById("1").innerHTML = luku ;
document.getElementById("2").innerHTML = nimi ;
document.getElementById("3").innerHTML = nimi + " " + luku;
document.getElementById("4").innerHTML = nimi + " " + (luku + luku);


let luku1 = 20, luku2 = 21, totuus;
totuus = (luku == luku1);
document.getElementById("5").innerHTML = totuus;
totuus = (luku == luku2);
document.getElementById("6").innerHTML = totuus;


let mopot = ["Suzuki","Solifer","Honda"];
document.getElementById("7").innerHTML = mopot[0];
document.getElementById("8").innerHTML = mopot[1];


let koira = {nimi:"Moppe", laji:"sekarotuinen", ikä:4, väri:"ruskea"};
document.getElementById("9").innerHTML = "Koira nimeltä " + koira.nimi + " on " + koira.laji + " ja sen ikä on " + koira.ikä + " ja väri on " + koira.väri;