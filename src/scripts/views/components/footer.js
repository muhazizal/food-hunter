import styleText from '../../../styles/components/footer.scss';

class FooterApp extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
		this._renderStyle();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
      <footer>Copyright &copy; 2020 - Food Hunter</footer>
    `;
	}

	_renderStyle() {
		const styleFooter = document.createElement('style');
		styleFooter.type = 'text/css';
		styleFooter.appendChild(document.createTextNode(styleText));

		this.shadowDOM.appendChild(styleFooter);
	}
}

customElements.define('footer-app', FooterApp);
