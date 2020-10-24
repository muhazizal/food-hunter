import stylesTextList from '../../../../styles/components/home/restaurants-list.scss';
import stylesTextItem from '../../../../styles/components/restaurant-item.scss';
import StylesHelper from '../../../utils/styles-helper';
import '../restaurant-item';

class FavoriteRestaurants extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
		StylesHelper.init({
			stylesText: [stylesTextList, stylesTextItem],
			shadowRoot: this.shadowRoot,
		});
	}

	set restaurants(restaurants) {
		this._restaurants = restaurants;
		this._renderData();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
			<style>
				.restaurants {
					margin-top: 3rem;
					margin-bottom: 5rem;
				}

				.restaurants__label {
					margin: 0;
				}
			</style>

      <section class="restaurants">
        <h2 class="restaurants__label">Favorite Restaurants</h2>
        <div class="restaurants__list" id="favorite-list">
        
        </div>
      </section>
		`;
	}

	_renderData() {
		const FavoriteList = this.shadowDOM.querySelector('#favorite-list');
		const restaurantItem = document.createElement('restaurant-item');

		restaurantItem.restaurants = this._restaurants;
		FavoriteList.appendChild(restaurantItem);
	}
}

customElements.define('favorite-restaurants', FavoriteRestaurants);
