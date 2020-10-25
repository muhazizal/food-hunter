import stylesText from '../../../styles/components/render-failed.scss';
import StylesHelper from '../../utils/styles-helper';

class RenderError extends HTMLElement {
	constructor() {
		super();

		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
		StylesHelper.init({
			stylesText,
			shadowRoot: this.shadowRoot,
		});
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
      <div class="render__error">
        <img src="/images/illustrators/data-error.svg" alt="render-error">
        <p>"There is an error in rendering the data"</p>
      </div>
    `;
	}
}

customElements.define('render-error', RenderError);
