function funktio() {
  var input1 = parseFloat(document.forms["lasku"]["numero1"].value);
  var input2 = parseFloat(document.forms["lasku"]["numero2"].value);
  if (input1 >= 1 && input1 <= 10 && input2 >= 1 && input2 <= 10) {
      var summa = input1 + input2;
      var erotus = input1 - input2;
      var tulo = input1 * input2;
      var jako = input1 / input2;

      function joku() {
          var lista1 = [];
          if (input1 < input2) {
              for (var ad = input1; ad <= input2; ad++) {
                  lista1.push(ad);
              }
          }
          else if (input1 > input2) {
              for (var ad = input2; ad <= input1; ad++) {
                  lista1.push(ad);
              }
          }
          return lista1;
      }

      document.getElementById("p1").innerHTML = summa;
      document.getElementById("p2").innerHTML = erotus;
      document.getElementById("p3").innerHTML = tulo;
      document.getElementById("p4").innerHTML = jako;
      document.getElementById("p5").innerHTML = joku();
  }
  else { 
      alert("luku ei ole 1-10 välillä")
      
  }
}

function clear1() {
  document.getElementById("p1").innerHTML = " ";
  document.getElementById("p2").innerHTML = " ";
  document.getElementById("p3").innerHTML = " ";
  document.getElementById("p4").innerHTML = " ";
  document.getElementById("p5").innerHTML = " ";
  document.getElementById("number1").value = " ";
  document.getElementById("number2").value = " ";
  

}
