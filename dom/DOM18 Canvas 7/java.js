'use strict';
(function(){
 document.addEventListener('DOMContentLoaded',alusta);
function alusta() {
 let piirtoalusta=document.getElementById('piirtoalusta');
 let konteksti=piirtoalusta.getContext('2d');
 let kuva=new Image();
 kuva.src="kukka.png";
 kuva.onload=piirrakuva;
 konteksti.fillStyle='yellow';
 konteksti.arc(150,100,50,0,2*Math.PI);
 konteksti.fill();
 konteksti.beginPath();
 konteksti.fillStyle='rgba(157, 27, 94, 0.8)';
 konteksti.arc(100,100,50,0,2*Math.PI);
 konteksti.fill();
 konteksti.beginPath();
 konteksti.lineWidth=5;
 konteksti.moveTo(300,200);
 konteksti.lineTo(200,250);
 konteksti.lineTo(300,400);
 konteksti.closePath();
 konteksti.stroke();
 function piirrakuva() {
 konteksti.drawImage(kuva,300,300);
 konteksti.drawImage(kuva,200,300);
 konteksti.drawImage(kuva,100,300);
 }
}
})();