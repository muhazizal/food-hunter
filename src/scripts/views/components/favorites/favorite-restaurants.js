import stylesTextList from '../../../../styles/components/home/restaurants-list.scss';
import stylesTextItem from '../../../../styles/components/restaurant-item.scss';
import stylesTextSpinner from '../../../../styles/components/spinner.scss';
import StylesHelper from '../../../utils/styles-helper';
import '../restaurant-item';
import '../renderEmpty';

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
			stylesText: [stylesTextList, stylesTextItem, stylesTextSpinner],
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
					height: calc(100vh - 7rem);
					margin-top: 7rem;
					margin-bottom: -7rem;
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
		const favoriteListContainer = this.shadowDOM.querySelector('#favorite-list');
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
