import styleText from '../../../../styles/components/home/restaurants.scss';
import API_ENDPOINT from '../../../globals/api-endpoint';

class Restaurants extends HTMLElement {
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

	set restaurants(restaurants) {
		this._restaurants = restaurants;
		this._renderData();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
      <section class="restaurants">
        <h2 class="restaurants__label">Our Best Restaurants</h2>
        <div class="restaurants__list" id="restaurants-list">
        
        </div>
      </section>
    `;
	}

	_renderStyle() {
		const styleRestaurants = document.createElement('style');
		styleRestaurants.type = 'text/css';
		styleRestaurants.appendChild(document.createTextNode(styleText));

		this.shadowRoot.appendChild(styleRestaurants);
	}

	_renderData() {
		const restaurantsList = this.shadowDOM.querySelector('#restaurants-list');

		this._restaurants.forEach((restaurant) => {
			restaurantsList.innerHTML += `
        <article class="restaurant">
          <div class="restaurant__thumbnail">
						<img class="restaurant__image" 
							src="${API_ENDPOINT.RESTAURANT_PICTURES.MEDIUM(restaurant.pictureId)}" 
							alt="${restaurant.name} Image" 
						/>
            <p class="restaurant__city">${restaurant.city}</p>
          </div>
          <div class="restaurant__content">
						<h3 class="restaurant__name">
							<a href="/#/restaurant/${restaurant.id}">${restaurant.name}</a>
						</h3>
						<p class="restaurant__rating">
							<i class="material-icons">star</i>
              ${restaurant.rating}
            </p>
            <p class="restaurant__description">${restaurant.description.replace(/^(.{150}[^\s]*).*/, '$1')}</p>
					</div>
					<div class="restaurant__action">
						<a href="/#/restaurant/${restaurant.id}">Detail Restaurant</a>
					</div>
        </article>
      `;
		});
	}
}

customElements.define('home-restaurants', Restaurants);
