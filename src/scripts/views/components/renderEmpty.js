import stylesText from '../../../styles/components/render-failed.scss';
import StylesHelper from '../../utils/styles-helper';

class RenderEmpty extends HTMLElement {
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
        <img src="/images/illustrators/data-empty.svg" alt="render-empty">
        <p>"You haven't saved any restaurants"</p>
      </div>
    `;
	}
}

customElements.define('render-empty', RenderEmpty);
