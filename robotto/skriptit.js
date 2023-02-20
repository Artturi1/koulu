myShow = w3.slideshow(".robotto", 0);

function robotto() {
	let komento = document.getElementById("komento").value;

	if (komento == "robotto.wave();") {
		document.getElementById("nayta").innerHTML =
			"<img class='wave' src='robotti_heiluta1.jpg'>" +
			"<img class='wave' src='robotti_heiluta2.jpg'>";
		w3.slideshow(".wave", 500);
		document.getElementById("stand").style.display = "none";
		return;
	} else if (komento == "robotto.jump();") {
		document.getElementById("nayta").innerHTML =
			"<img class='jump' src='robotti_perus.jpg'>" +
			"<img class='jump' src='robotti_hyppää.jpg'>";
		w3.slideshow(".jump", 1000);
		document.getElementById("stand").style.display = "none";
		return;
	} else if (komento == "robotto.walk();") {
		document.getElementById("nayta").innerHTML =
			"<img class='walk' src='robotti_kävelee1.jpg'>" +
			"<img class='walk' src='robotti_kävelee2.jpg'>";
		w3.slideshow(".walk", 1000);
		document.getElementById("stand").style.display = "none";
		return;
	} else {
		alert("Syntax error");
	}
}

function tyhjenna() {
	document.getElementById("nayta").innerHTML = "";
	document.getElementById("stand").style.display = "block";
	document.getElementById("komento").value = "";
}
