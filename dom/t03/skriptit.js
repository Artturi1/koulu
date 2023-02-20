

function Lisaa(){
    let vanhempi = document.getElementById("divi");
    let kappale = document.createElement("p");
    kappale.setAttribute("id", "p2")
    let teksti = document.createTextNode("Tekstiä");
    kappale.appendChild(teksti);
    vanhempi.appendChild(kappale);

}

function Muuta(){
    let elementti = document.getElementById("p1");
    elementti.innerHTML = "muuta";
    elementti.style.color = "red";
}

function Poista(){
    let vanhempi = document.getElementById("divi");
    let lapsi = document.getElementById("p2");
    vanhempi.removeChild(lapsi);
    
}