

$(document).ready(function(){
   $("#btn3").on('click', function(){
      $("#form_t").html(`<form id="form_3" >  

   <input id="nimi" type="text" name="tuotenimi" placeholder="Tuotenimi"></input>
   <input id="kategoria" type="text" name="tuotekategoria" placeholder="Tuotekategoria" ></input>
   <button id=submit  >hae tuote</button>
</form>`);

     });
   $("#btn1").on('click', function(){
      $("#form_t").html(`
`);



  });
    $("#btn4").on('click', function(){
       $("#form_t").html(`<form id="form" >  

   <input id="nimi" type="text" name="tuotenimi" placeholder="Tuotenimi" required></input>
   <input id="kuvaus" type="text" name="tuotekuvaus" placeholder="Tuotekuvaus" required></input>
   <input id="kategoria" type="text" name="tuotekategoria" placeholder="Tuotekategoria" required></input>
   <input id="hinta" type="text" name="tuotehinta" placeholder="Tuotehinta" required> </input>
   <button id=submit  >lisää tuote</button>

          
</form>`);

      });
   $("#btn2").on('click', function(){
      $("#form_t").html(`<p>
      kala, koira ja hevonen
</p>`);
   });
  
   $("#btn5").on('click', function(){
      $("#form_t").html(`<form id="form_2" >  

  <input id="nimi" type="text" name="tuotenimi" placeholder="Tuotenimi" required></input>
 
  <button id=submit  >poista tuote</button>

         
</form>`);



  });


   $( "#form_t" ).on('submit', "#form" ,function(e) {
      console.log("submit")
      //addTuote to json
      e.preventDefault();
      const nimi = $("#nimi").val();
      const kuvaus = $("#kuvaus").val();
      const kategoria = $("#kategoria").val();
      const hinta = $("#hinta").val();
      console.log(nimi);
      console.log(kuvaus);
      console.log(kategoria);
      console.log(hinta);
      $.ajax({
         url: 'http://localhost:8081/api/lisaa',
         contentType: 'application/json',
         type: 'POST',
         data: JSON.stringify({nimi: nimi, kuvaus: kuvaus, kategoria: kategoria, hinta: hinta}),
         success: function(data) {
            console.log(data);
            alert("Tuote lisätty");
            //alert("Tuote lisätty");
         },
         

      });
   });
   $( "#form_t" ).on('submit', "#form_3" ,function(e) {
      console.log("submit")
      //addTuote to json
      e.preventDefault();
      const nimi = $("#nimi").val();
      const kategoria = $("#kategoria").val();
      console.log(nimi);
      console.log(kategoria);
      $.ajax({
         url: 'http://localhost:8081/api/haetuote',
         contentType: 'application/json',
         type: 'POST',
         data: JSON.stringify({nimi: nimi, kategoria: kategoria}),
         success: function(data) {
            console.log(data);
            console.log('succses1')
            //display loydetty from json
            
           
           
            
         },

         
      
         
      });
      
      
     
      

   });
   //display data from json
  

  
   

     
      

   
      
   


   
   
   
  

   
   $( "#form_t" ).on('submit', "#form_2" ,function(e) {
      console.log("submit")
      //addTuote to json
      e.preventDefault();
      const nimi = $("#nimi").val();
      
      console.log(nimi);
      
      $.ajax({
         url: 'http://localhost:8081/api/poista',
         contentType: 'application/json',
         type: 'POST',
         data: JSON.stringify({nimi: nimi}),
         success: function(data) {
            console.log(data);
            alert("poistettu");
            //alert("Tuote lisätty");
         },
         


   });

   });
});
