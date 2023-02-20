let piirtoalusta = document.getElementById('piirtoalusta');
let konteksti = piirtoalusta.getContext('2d');
konteksti.fillStyle = 'blue';
// x y lev kork
konteksti.fillRect(10, 10, 40, 50);
konteksti.fillStyle = 'yelow';
konteksti.fillRect(200, 200, 10, 100);
konteksti.strokeStyle = 'blue';
konteksti.lineWidth = 9;
konteksti.strokeRect(200, 20, 100, 100);