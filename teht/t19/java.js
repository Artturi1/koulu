var test;

test = {
	a: "test",
	b: "1",
	yht: function () {
		return this.a + " " + this.b;
	},
};

var p1 = document.getElementById("test1");

window.addEventListener("load", () => {
	p1.innerHTML += test.yht();
});

document.getElementById("test2").addEventListener("click", () => {
	p1.innerHTML += test.yht();
});
