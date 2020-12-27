import '../restaurant-item';

class Restaurants extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this._renderTemplate();
	}

	set restaurants(restaurants) {
		this._restaurants = restaurants;
		this._renderRestaurantItem();
	}

	_renderTemplate() {
		this.innerHTML = `
      <section class="restaurants" id="restaurants-content">
        <h2 class="restaurants__label">Our Best Restaurants</h2>
				<div class="restaurants__list" id="restaurants-list">
					<div class="skeleton-container">
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
						<div class="skeleton"></div>
					</div>
				</div>
      </section>
    `;
	}

	_renderRestaurantItem() {
		const restaurantsList = this.querySelector('#restaurants-list');
		const restaurantItem = document.createElement('restaurant-item');

		restaurantItem.restaurants = this._restaurants;

		// Remove skeleton
		while (restaurantsList.firstChild) {
			restaurantsList.removeChild(restaurantsList.lastChild);
		}

		restaurantsList.appendChild(restaurantItem);
	}
}

customElements.define('home-restaurants', Restaurants);
