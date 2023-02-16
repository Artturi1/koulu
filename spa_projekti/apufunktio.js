'use strict';

const fs = require('fs');
const { stringify } = require('querystring');



async function haekategoria(kategoria ){
    const loydetyt=[];
    if (kategoria == " ")(req,res)=>{
        haeKaikkituotteet()
        res.end
        
    }

    for(let tuote of tuotteet){
        if(tuote.kategoria===kategoria) {
            loydetyt.push(tuote);
        }
    }
    
    return loydetyt;
    
}

async function haetuote(nimi){
    const loydetyt=[];
    for(let tuote of tuotteet){
        if(tuote.nimi===nimi) {
            loydetyt.push(tuote);
        }
    }
    console.log(loydetyt);  
    return loydetyt;


}


async function haeKaikkituotteet(){ 
    const data= await fs.readFile(tuotteet,'utf8');
    return JSON.parse(data);

    
}


async function lisaatuote(nimi, kategoria, hinta, kuvaus){
    const uusiTuote = {
        nimi: nimi,
        kategoria: kategoria,
        hinta: hinta,
        kuvaus: kuvaus
        
        
    };
    let tuotteet = fs.readFileSync('./tuotteet.json', 'utf8');
    tuotteet = JSON.parse(tuotteet);  
    tuotteet.push(uusiTuote);
    fs.writeFileSync('./tuotteet.json', JSON.stringify(tuotteet), null , 4);
    console.log(uusiTuote);
    console.log(tuotteet);
    return uusiTuote;
}
    





async function poistatuote(nimi){
    //remove prdouct
    let tuotteet = fs.readFileSync('./tuotteet.json', 'utf8');
    tuotteet = JSON.parse(tuotteet);
    const tuote = tuotteet.find(tuote => tuote.nimi === nimi);
    const index = tuotteet.indexOf(tuote);
    tuotteet.splice(index, 1);
    fs.writeFileSync('./tuotteet.json', JSON.stringify(tuotteet), null , 4);
    console.log(tuotteet);
    return tuotteet;
}


module.exports = {
    haekategoria,
    haetuote,
    haeKaikkituotteet,
    lisaatuote,
    poistatuote

   
};  