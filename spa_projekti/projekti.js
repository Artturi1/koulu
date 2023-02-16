const http = require ('http');
const path = require ('path');
const fs = require ('fs');

const{
    port,
    host,
    varasto} = require('./config.json');


const {haekategoria, haetuote, haekaikkituotteet, lisaatuote, poistatuote} = require ('./apufunktio.js');
fs.readFile('./index.html', 'utf8', (err, data) => {
    const palvelin = http.createServer((req,res)=>{
        const {pathname, searchParams} = new URL(`http://${host}:${port}${req.url}`);
        const reitti = decodeURIComponent(pathname);
        const metodi = req.method.toUpperCase();
       

       
        
        if(reitti==='/kategoriat'){
            res.write('/kala\n');
            res.write('koira\n');
            res.write('hevonen\n');
        
        
        }
        else if(reitti==='/tuotteet'){
            haekategoria(searchParams.get('kategoria'));
        
        
        }
    
        else if(reitti==='/tuote'){
            haetuote(searchParams.get('nimi'));
        }
        else if (reitti==='/lisaa'){
            lisaatuote(searchParams.get('nimi'), searchParams.get('kategoria'), searchParams.get('hinta'), searchParams.get('kuvaus'));
            
        }
        else if (reitti==='/poista'){
            poistatuote(searchParams.get('nimi'));

        }   
        else{
            res.statusCode=404;
            res.end();("tuotetta ei löydy");
    res.end
    }
   
    
});






palvelin.listen(port,host,()=>console.log(""));




});

