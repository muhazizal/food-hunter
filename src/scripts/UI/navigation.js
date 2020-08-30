const navToggle = document.querySelector('.nav__toggle');
const navDrawer = document.querySelector('.nav__drawer');

navToggle.addEventListener('click', event => {
	navToggle.classList.toggle('change');
	navDrawer.classList.toggle('open');
	event.stopPropagation();
});
