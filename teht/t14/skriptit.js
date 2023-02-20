function tulostaParilliset() {
    var x = document.getElementById("luku").value;
    let y = 0;
    let text = "";
    while (y<=x){
      text +=  y + " ";
      y = y+2;
    }
    document.getElementById("demo").innerHTML = text;
  }
  
  function summaKeskiarvo() {
    let x = prompt("Anna luku");
    let y = 0;
    let z = 0;
    while (x != -1) {
      y += parseInt(x);
      x = prompt("Anna luku");
      z++;
    }
    if (z < 1){
      document.getElementById("demo2").innerHTML ="Summa on " +  y;
      document.getElementById("demo3").innerHTML = "Keskiarvo on 0"
    }
    else if (z>=1){
    document.getElementById("demo2").innerHTML ="Summa on " +  y;
    document.getElementById("demo3").innerHTML = "Keskiarvo on " +y/z.toFixed(2);
    }
  }
