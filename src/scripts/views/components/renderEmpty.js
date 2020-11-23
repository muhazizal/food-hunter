class RenderEmpty extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this._renderTemplate();
	}

	_renderTemplate() {
		this.innerHTML = `
      <div class="render__error">
        <img src="/images/illustrators/data-empty.svg" alt="render-empty">
        <p>You have not saved any restaurants</p>
      </div>
    `;
	}
}

customElements.define('render-empty', RenderEmpty);
