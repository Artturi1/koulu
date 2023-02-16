function check(){
    const tilinum = document.getElementById("tilinum").value;
    const kentta = document.getElementById("kentta").value;
    const avain = document.getElementById("avain").value;
    const valitse = document.getElementById("valitse").value;
    const nimi = document.getElementById("nimi").value;
    const date = document.getElementById("date").value;
    const summa = document.getElementById("summa").value;

    if (tilinum.length != 22){
        document.getElementById("virhe_tili").innerHTML = "Tilinumero on liian pitkä tai lyhyt";
    } else {
        document.getElementById("virhe_tili").innerHTML = "";
    }

    if (nimi == ""){
        document.getElementById("virhe_nimi").innerHTML = "et ole laittanut nimeä";
    } else {
        document.getElementById("virhe_nimi").innerHTML = "";
    }

    if (summa == "") {
        document.getElementById("virhe_summa").innerHTML = "kenttä on tyhjä";
    } else {
        document.getElementById("virhe_summa").innerHTML = "";
    }

    if (date == "") {
        document.getElementById("virhe_date").innerHTML = "kenttä on tyhjä";
    } else {
        document.getElementById("virhe_date").innerHTML = "";
    }

    if (avain.length != 5 || avain == ""){
        document.getElementById("virhe_avain").innerHTML = "Avainluku on liian pitkä tai lyhyt";
    } else {
        document.getElementById("virhe_avain").innerHTML = "";
    }

    if (kentta === '') {
        document.getElementById('virhe_valinta').innerHTML = 'Syöte on tyhjä';
    } else {
        if (valitse === 'viitenumero') {
            if (isNaN(kentta)) {
                document.getElementById('virhe_valinta').innerHTML = 'Syötetteen täytyy olla numerosarja';
            } else {
                document.getElementById('virhe_valinta').innerHTML = '';
            }
        } else {
            document.getElementById('virhe_valinta').innerHTML = '';
        }
    }
}