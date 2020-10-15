import styleText from '../../../../styles/components/restaurant/profile.scss';
import API_ENDPOINT from '../../../globals/api-endpoint';

class RestaurantProfile extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	set restaurant(restaurant) {
		this._restaurant = restaurant;
		this._renderTemplate();
		this._renderStyle();
		this._restaurantCategory();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
			<section class="profile">
				<div class="profile__thumbnail">
					<img class="profile__image"
						src="${API_ENDPOINT.RESTAURANT_PICTURES.MEDIUM(this._restaurant.pictureId)}" 
						alt="${this._restaurant.name} Image"
					/>
				</div>
				<div class="profile__content">
					<h2 class="profile__name">${this._restaurant.name}</h2>
					<p class="profile__rating">
						<i class="material-icons star">star</i>
						${this._restaurant.rating}
					</p>
					<p class="profile__category">
						<i class="material-icons category">restaurant_menu</i>
					</p>
					<p class="profile__address">
						<i class="material-icons">place</i>
						${this._restaurant.address}
					</p>
					<button class="btn--favorite">
						<i class="material-icons">favorite_border</i>
					</button>
				</div>
			</section>
		`;
	}

	_renderStyle() {
		const styleProfile = document.createElement('style');
		styleProfile.type = 'text/css';
		styleProfile.appendChild(document.createTextNode(styleText));

		this.shadowDOM.appendChild(styleProfile);
	}

	_restaurantCategory() {
		const restaurantCategory = this.shadowDOM.querySelector('.profile__category');
		let i = 1;

		this._restaurant.categories.forEach((menu) => {
			if (this._restaurant.categories.length === i) {
				restaurantCategory.innerHTML += `${menu.name}`;
			} else {
				restaurantCategory.innerHTML += `${menu.name}, `;
			}

			i += 1;
		});
	}
}

customElements.define('restaurant-profile', RestaurantProfile);
