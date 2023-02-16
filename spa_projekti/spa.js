


$(document).ready(function(){
      $("#2").click(function(){
         
         
         $("#form").html(
         <form action="http://localhost:8081/lisaatuote" method="get">  
            <input type="text" name="tuotenimi" placeholder="Tuotenimi" required></input>
            <input type="text" name="tuotekuvaus" placeholder="Tuotekuvaus" required></input>
            <input type="text" name="tuotekategoria" placeholder="Tuotekategoria" required></input>
            <input type="text" name="tuotehinta" placeholder="Tuotehinta" required> </input>
            <input type="submit" value="Lisää tuote"></input>

            
         </form>
        );
      });
   });

