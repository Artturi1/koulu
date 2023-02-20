class lemmikki2 {
	constructor(lemmikki1, väri, vuosi) {
		this.lemmikki1 = lemmikki1;
		this.väri = väri;
		this.vuosi = vuosi;
	}
	ikä() {
		var date = new Date();
		return date.getFullYear() - this.vuosi;
	}
}
var date = new Date();
var tämäVuosi = date.getFullYear();
var lemmikkini = new lemmikki2("koira", "ruskea", 2013);
var lemmikkiniStr =
	"lemmikkini on " +
	lemmikkini.lemmikki1 +
	", se on " +
	lemmikkini.väri +
	" ja iältäänn " +
	lemmikkini.ikä() +
	" vuotta.";
document.getElementById("lemmikkini3").innerHTML = lemmikkiniStr;
console.log(lemmikkini.lemmikki1);
