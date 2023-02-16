function test(){
    let num = 0, i = 0, summa = 0;

    do {
        num = Number(prompt());
        if (!isNaN(num)) {
            summa += num;
            i++;
            if (num == 0){
                i--;
            }
        }
    }
    while (num < 0 || num > 0){
        alert("Keskiarvo: " + summa / i);
    }
}