function test(){

    let text = prompt();

    document.getElementById("paikka1").innerHTML = text.toLowerCase();
    document.getElementById("paikka2").innerHTML = text.toUpperCase();
}