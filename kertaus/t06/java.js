function testi(){

    let text = "";
    for (let i = 1; i <= 20; i++) {
        
        if (i % 5 == 0){
            text += i + " jaollinen viidellä" + "<br>";
            continue;
        }
        text += i + "<br>";
        
    }
    document.getElementById("paikka1").innerHTML = text;
}