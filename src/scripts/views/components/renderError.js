class RenderError extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this._renderTemplate();
	}

	_renderTemplate() {
		this.innerHTML = `
      <div class="render__error">
        <img src="/images/illustrators/data-error.svg" alt="render-error">
        <p>There is an error in rendering the data</p>
      </div>
    `;
	}
}

customElements.define('render-error', RenderError);
