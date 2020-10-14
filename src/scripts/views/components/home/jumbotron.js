import stylesText from '../../../../styles/components/home/jumbotron.scss';

class Jumbotron extends HTMLElement {
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

	_renderStyle() {
		const styleJumbotron = document.createElement('style');
		styleJumbotron.type = 'text/css';
		styleJumbotron.appendChild(document.createTextNode(stylesText));

		this.shadowRoot.appendChild(styleJumbotron);
	}
}

customElements.define('home-jumbotron', Jumbotron);
