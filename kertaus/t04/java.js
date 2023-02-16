var x = parseInt(window.prompt("anna numero: "));
function error1() {
	try {
		if (x < 0) {
			throw "liian pieni";
		}
	} catch (err) {
		alert(err);
		x = window.prompt("anna numero: ");
		error1();
		return;
	}
	alert(x);
}
error1();
