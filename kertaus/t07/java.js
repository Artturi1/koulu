function testi() {
    let taulukko = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu"]
    taulukko.push('toukokuu', 'kesäkuu')
    let a = '';
    let space = ' ';
    let numero = 0;


    for (let i = numero; i < taulukko.length; i++) {
        a += space + taulukko[i];
    }
    document.getElementById("testi").innerHTML = a;

}