function taulukonSuurin(lista) {
    document.getElementById('test').innerHTML = Math.max(...lista);
}
var list = [1, 7, 5];
taulukonSuurin(list);