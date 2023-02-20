const express = require('express');
const path = require ('path');
const fs = require ('fs');
const app = express();
const {haekategoria, haeKaikkituotteet, haetuote, poistatuote, lisaatuote, hae,} = require('./apufunktio.js');



const{
    port,
    host,
    } = require('./config.json');
const { data } = require('jquery');
app.use(express.static('public'))

app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.post('/api/haekategoria', async (req,res)=>{
    const kategoria = req.query.kategoria;
    haekategoria(kategoria);
    res.end();
});
app.post('/api/haetuote', async (req,res)=>{
    console.log("SUCSESS 2")
    const nimi = req.body.nimi;
    const kategoria = req.body.kategoria;
    console.log(nimi, kategoria)
    if (nimi == "") {
        if (kategoria == "") {
            console.log("haekaikki")
            haeKaikkituotteet()
           
        }
    }
    else if (kategoria != "") {
        if (nimi == "") {
            console.log("haekategoria")
            haekategoria(kategoria)
            
            
        }
    }
    else if (nimi != "") {
        if (kategoria == "") {
            console.log("haetuote")
            console.log('toimii')
            haetuote(nimi)
            
            
        }
    }
    else if (nimi != "") {
        if (kategoria != "") {
            console.log("hae")
            hae(nimi, kategoria)
            
            
        }
    }
    res.end();
    
   
    
    
});
app.post('/api/haekaikki', async (req,res,)=>{
    haeKaikkituotteet();
    res.end();
    

});  
app.post('/api/lisaa', (req,res)=>{
    const nimi = req.body.nimi;
    const kategoria = req.body.kategoria;
    const hinta = req.body.hinta;
    const kuvaus = req.body.kuvaus;
    console.log(nimi, kategoria, hinta, kuvaus)
    lisaatuote(nimi, kategoria, hinta, kuvaus);
    res.end();
    
});
app.post('/api/poista', (req,res)=>{
    const nimi = req.body.nimi;
    poistatuote(nimi);
    res.end();
    
});


app.listen(port,host,()=>console.log(""));





