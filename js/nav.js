async function loadNav() {
	var nav = document.getElementById("nav");
	var response = await fetch('nav.html');
	var content = await response.text();
	nav.outerHTML = content;
}

loadNav();