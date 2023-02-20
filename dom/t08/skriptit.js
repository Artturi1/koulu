'use strict';

(function () {

    document.addEventListener('DOMContentLoaded', start);
    function start() {

        var form = document.getElementById("luvut"),
            label = document.createElement("label"),
            input = document.createElement("input"),
            div = document.createElement("div");

// Kaikki ei numeroiset liittyvät nimeen.

        label;
        input;
        div;

        label.innerHTML = "Nimi:";
        input.setAttribute("type", "text");
        input.setAttribute("id", "nimi");
        input.setAttribute("name", "nimi");
        input.setAttribute("onblur", "bankpin()");
        div.setAttribute("class", "formname");
        
        div.append(label, input);
        form.appendChild(div);

    }
})();

function bankpin() {

    disableFunction("nimi");

    var label2 = document.createElement("label"),
        input2 = document.createElement("input"),
        div2 = document.createElement("div"),
        form = document.getElementById("luvut");

//Tarkistaa ettei nimi ole tyhjä, muuten se päästäisi läpi.

    const name = document.getElementById("nimi").value;
    if (name != "") {

//Kaikki numero kakkoset liittyvät tilinumeroon.
//Label on teksti, input on input, div on div

        label2;
        input2;
        div2;

        label2.innerHTML = "Tilinumero (tasan 13 merkkiä):";
        input2.setAttribute("type", "text");
        input2.setAttribute("id", "tnro");
        input2.setAttribute("name", "tnro");
        input2.setAttribute("onblur", "payment()");
        div2.setAttribute("class", "formpin");
        
        div2.append(label2, input2);
        form.appendChild(div2);

    }
}

function payment() {

    var label3 = document.createElement("label"),
        maara = document.createElement("label"),
        input3 = document.createElement("input"),
        button = document.createElement("button"),
        form = document.getElementById("luvut"),  
        div3 = document.createElement("div"),
        div4 = document.createElement("div"),
        div5 = document.createElement("div");

    let pin = document.getElementById('tnro').value;
    if (pin.length == 13) {

//Kaikki numero kolmoset liittyvät slideriin.
//Label on teksti, input on input, div on div

        input3,
        label3,
        div3;
        
        label3.innerHTML = "Määritä siirrettävä summa:";
        label3.setAttribute("class", "formslider");
        input3.setAttribute("type", "range");
        input3.setAttribute("id", "maara");
        input3.setAttribute("name", "maara");
        input3.setAttribute("min", "1");
        input3.setAttribute("max", "100");
        div3.setAttribute("class", "formslider");

        div3.append(label3, input3);
        form.appendChild(div3);

//Div4 koskee ainoastaan siihen tekstiin josta tietää paljon maksaa (aka maara)

        maara;
        div4;

        maara.innerHTML = "Määrä on " + document.getElementById("maara").value;
        maara.setAttribute("id", "slidervalue");
        div4.setAttribute("class", "formamount");

        div4.append(maara);
        form.appendChild(div4);

//Div5 koskee ainoastaan Lähetä nappiin

        button;
        div5;

        button.innerHTML = "Lähetä";
        button.setAttribute("type", "submit");
        div5.setAttribute("class", "formsubmit");

        div5.append(button);
        form.appendChild(div5);

//Pitää "maara" labelin toiminnassa

        input3.oninput = function () {

            document.getElementById("slidervalue").innerHTML = "Määrä on " + input3.value;

        }
    }
}

//Ekan napin disabloiminen

function disableFunction(nimi){
    var element = document.getElementById(nimi);
    if (element.value != ""){
    element.onblur = "";
    }
}