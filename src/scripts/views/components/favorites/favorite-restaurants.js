import '../restaurant-item';
import '../renderEmpty';

class FavoriteRestaurants extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this._renderTemplate();
	}

	set restaurants(restaurants) {
		this._restaurants = restaurants;
		this._renderData();
	}

	_renderTemplate() {
		this.innerHTML = `
      <section class="restaurants" id="favorite__restaurants">
        <h2 class="restaurants__label" id="favorite__label">Favorite Restaurants</h2>
        <div class="restaurants__list" id="favorite__list"></div>
      </section>
		`;
	}

	_renderData() {
		const favoriteListContainer = this.querySelector('#favorite__list');
		const restaurantItemContainer = document.createElement('restaurant-item');
		const renderEmptyContainer = document.createElement('render-empty');

		restaurantItemContainer.restaurants = this._restaurants;

		if (this._restaurants.length > 0) {
			favoriteListContainer.appendChild(restaurantItemContainer);
		} else {
			favoriteListContainer.appendChild(renderEmptyContainer);
		}
	}
}

customElements.define('favorite-restaurants', FavoriteRestaurants);
