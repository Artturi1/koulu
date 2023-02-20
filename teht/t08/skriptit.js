function aika() {
    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate() + "/" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.getElementById("1").innerHTML = dateTime;
}

function vaihto() {
    document.getElementById("p2").innerHTML = "kiitos!"
}

function isotkirjaimet() {
    const x = document.getElementById("kunvaihto");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = "tuo hiiti tähän";
}
function mOut(obj) {
    obj.innerHTML = "kiitos!";
}
