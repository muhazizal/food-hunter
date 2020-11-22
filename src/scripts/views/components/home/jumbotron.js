class Jumbotron extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this._renderTemplate();
		this._jumbotronButton();
	}

	_renderTemplate() {
		this.innerHTML = `
      <section class="jumbotron">
        <div class="jumbotron__inner">
          <h2 class="jumbotron__title">Best Restaurants Provide Good Foods</h2>
          <p class="jumbotron__tagline">
            Be wise to your healthy with choosing good and high quality foods at our restaurants
          </p>
					<button type="button" class="jumbotron__button">See Our Restaurants</button>
				</div>
      </section>
		`;
	}

	_jumbotronButton() {
		this.querySelector('.jumbotron__button').addEventListener('click', () => {
			const restaurantLabel = document.querySelector('.restaurants__label');

			restaurantLabel.scrollIntoView({
				behavior: 'smooth',
			});
		});
	}
}

customElements.define('home-jumbotron', Jumbotron);
