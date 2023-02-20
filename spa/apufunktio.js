'use strict';

const fs = require('fs');
const { stringify } = require('querystring');
const tuotteet = require('./tuotteet.json')



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
    addtotempjson(loydetyt);
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
    addtotempjson(loydetyt); 
    return loydetyt;


}


async function haeKaikkituotteet(){ 
    const loydetyt=[];
    for(let tuote of tuotteet){
        loydetyt.push(tuote);
    }
    addtotempjson(loydetyt);
    return loydetyt;
    

    
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
async function hae(nimi,kategoria){
    //searc product iwth name and category
    const loydetyt=[];
    for(let tuote of tuotteet){
        if(tuote.nimi===nimi && tuote.kategoria===kategoria) {
            
            loydetyt.push(tuote);
        }
        else if(tuote.nimi===nimi && tuote.kategoria != kategoria ) {
            
            loydetyt.push(tuote);
        }
        else if(tuote.nimi != nimi && tuote.kategoria===kategoria) {
            
            loydetyt.push(tuote);
        }
    }
    alert('toimii')
    addtotempjson(loydetyt);    
    console.log('toimii saatana')
    //print products to html
    // Parse the JSON data
    var data = JSON.parse(fs.readFileSync('./temp.json', 'utf8'));

    var tableRows = "";
    for (var i = 0; i < data.length; i++) {
    var item = data[i];
    tableRows += "<tr><td>" + item.name + "</td><td>" + item.price + "</td></tr>";
    }


    document.getElementById("form_t").innerHTML = tableRows;





    



    



    
   
    
    console.log(loydetyt);
    return loydetyt;
    
}
async function addtotempjson(json){
    //add json to temp.json
    fs.writeFileSync('./temp.json', JSON.stringify(json), null , 4);
    console.log(json);
    return json;

   

   
   



   
}




module.exports = {
    haekategoria,
    haetuote,
    haeKaikkituotteet,
    lisaatuote,
    poistatuote,
    hae,
    

   
};  