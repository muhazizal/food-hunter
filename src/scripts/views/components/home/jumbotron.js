import stylesText from '../../../../styles/components/home/jumbotron.scss';
import StylesHelper from '../../../utils/styles-helper';

class Jumbotron extends HTMLElement {
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
      <section class="jumbotron">
        <div class="jumbotron__inner">
          <h2 class="jumbotron__title">Best Restaurants Provide Good Foods</h2>
          <p class="jumbotron__tagline">
            Be wise to your healthy with choosing good and high quality foods at our restaurants
          </p>
        </div>
      </section>
		`;
	}
}

customElements.define('home-jumbotron', Jumbotron);
