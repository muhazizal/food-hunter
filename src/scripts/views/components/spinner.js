class SpinnerIndicator extends HTMLElement {
	constructor() {
		super();

		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}
}

customElements.define('spinner-indicator', SpinnerIndicator);
