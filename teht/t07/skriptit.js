function summa(luku1, luku2) {
    return luku1 + luku2;
}
document.getElementById("1").innerHTML = summa(5, 3)

function fahrenheit(f) {
    c = (5/9) * (f-32)
    return f + " fahrenheit-astetta on " + c + " celcius-astetta."
}
document.getElementById("2").innerHTML = fahrenheit(77)