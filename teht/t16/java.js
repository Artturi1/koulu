function tarkistus() {
	var numero_juttu = document.getElementById("numero_t16").value;
	var viesti = document.getElementById("p01");
	try {
		if (numero_juttu == "") throw "tyhjä";
		else if (parseInt(numero_juttu) > 100) throw "liian pieni";
		else if (parseInt(numero_juttu) < 1) throw "liian iso";
	} catch (err) {
		viesti.innerHTML = "Syötetty tieto on " + err;
	}
}
