function test(){

    let taulukko = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu"];
    taulukko.push("Toukokuu", "Kesäkuu");
    document.getElementById("demo").innerHTML = taulukko.sort();
}