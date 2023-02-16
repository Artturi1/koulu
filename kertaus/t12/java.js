const x = prompt("Anna merkkijono 1: ");
const y = prompt("Anna merkkijono 2: ");
if (x.search(y) != -1) {
    document.getElementById('test').innerHTML = "kyllä sisätää";
}
else {
    document.getElementById('test').innerHTML = "ei sisällä";
    console.log(x.search(y));
}