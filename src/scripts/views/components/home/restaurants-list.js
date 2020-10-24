import stylesText from '../../../../styles/components/home/restaurants-list.scss';
import StylesHelper from '../../../utils/styles-helper';
import '../restaurant-item';

class Restaurants extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	set restaurants(restaurants) {
		this._renderTemplate();
		StylesHelper.init({
			stylesText,
			shadowRoot: this.shadowRoot,
		});
		this._restaurants = restaurants;
		this._renderRestaurantItem();
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

	_renderRestaurantItem() {
		const restaurantsList = this.shadowDOM.querySelector('#restaurants-list');
		const restaurantItem = document.createElement('restaurant-item');

		restaurantItem.restaurants = this._restaurants;
		restaurantsList.appendChild(restaurantItem);
	}
}

customElements.define('home-restaurants', Restaurants);
