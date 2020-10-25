import stylesTextRestaurants from '../../../../styles/components/home/restaurants-list.scss';
import stylesTextSpinner from '../../../../styles/components/spinner.scss';
import StylesHelper from '../../../utils/styles-helper';
import '../restaurant-item';

class Restaurants extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
		StylesHelper.init({
			stylesText: [stylesTextRestaurants, stylesTextSpinner],
			shadowRoot: this.shadowRoot,
		});
	}

	set restaurants(restaurants) {
		this._restaurants = restaurants;
		this._renderRestaurantItem();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
      <section class="restaurants" id="restaurants-content">
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
