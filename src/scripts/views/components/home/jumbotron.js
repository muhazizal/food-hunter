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
				<picture>
					<source class="jumbotron__img"
						type="image/webp"
						srcset="/images/heros/hero.webp"
					>
					<source class="jumbotron__img"
						type="image/jpg"
						srcset="/images/heros/hero-small.jpg 480w, /images/heros/hero-large.jpg 800w"
						sizes="(max-width: 600px) 480px, 100%"
						src="/images/heros/hero-large.jpg"
						alt="Restaurant Image"
					>
					<img class="jumbotron__img" 
						srcset="/images/heros/hero-small.jpg 480w, /images/heros/hero-large.jpg 800w"
						sizes="(max-width: 600px) 480px, 100%"
						src="/images/heros/hero-large.jpg"
						alt="Restaurant Image"  
					/>
				</picture>
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
