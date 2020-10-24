import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
	toggle: document.querySelector('.nav__toggle'),
	drawer: document.querySelector('.nav__drawer'),
	drawerItems: document.querySelectorAll('.nav__drawer__item'),
	content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});
