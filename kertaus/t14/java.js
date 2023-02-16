function test(){
    let x = prompt();
    document.getElementById("paikka").innerHTML = "Kehän pituus on " + ympyranKeha(x) + "cm.";
}

function ympyranKeha(sade){
    let keha = (2 * Math.PI * sade);
    return keha;
}