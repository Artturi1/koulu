function ada() {
    var ei = prompt('anna merkkijono: ');
    var moi1 = document.getElementById('moi');
    moi1.innerHTML += ei.length + '<br>';
    var uusi = ei.split(' ')
    console.log(uusi);
    for (var i = 0; i < uusi.length; i++) {
        moi1.innerHTML += uusi[i] + '<br>'
    }
}