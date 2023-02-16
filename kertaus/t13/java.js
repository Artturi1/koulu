function ikä() {
	const henkilö = { nimi: "Kalle", age: date.now() - birth() };
	const birth = new Date("2000-10-20");
	const kuukaudet = ["Tammikuuta", "Helmikuuta", "jne."];
	document.getElementById("p1").innerHTML =
		henkilö.nimi + "n ikä on " + henkilö.age + ".";
	document.getElementById("p2").innerHTML =
		"Hän on syntynyt " +
		birth.getDay() +
		". " +
		kuukaudet[birth.getMonth()] +
		" " +
		birth.getFullYear() +
		".";
}
