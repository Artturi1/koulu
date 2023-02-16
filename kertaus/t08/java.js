function test(){

    let taulukko = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu"];
    taulukko.push("Toukokuu", "Kesäkuu");
    document.getElementById("paikka1").innerHTML = taulukko.join(" ja ");
}