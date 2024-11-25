var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

var sidemenu = document.getElementById("sidemenu");

function openTab(event, tabName) {
	for (let tabLink of tabLinks)
		tabLink.classList.remove("active-link");

	for (let tabContent of tabContents)
		tabContent.classList.remove("active-tab");

	event.currentTarget.classList.add("active-link");
	document.getElementById(tabName).classList.add("active-tab");
}

function openmenu() {
	sidemenu.style.right = "0";
}

function closemenu() {
	sidemenu.style.right = "-200px";
}