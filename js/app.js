const getElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw Error(`No "${selector}" class, check your code`);
};

const links = getElement(".nav-links");
const navBtn = getElement(".nav-btn");

navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.innerHTML = currentYear;
