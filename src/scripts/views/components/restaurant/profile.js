import CONFIG from '../../../globals/config';
import stylesTextProfile from '../../../../styles/components/restaurant/profile.scss';
import stylesTextSpinner from '../../../../styles/components/spinner.scss';
import StylesHelper from '../../../utils/styles-helper';

class RestaurantProfile extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
	}

	set restaurant(restaurant) {
		this._restaurant = restaurant;
		this._renderData();
		StylesHelper.init({
			stylesText: [stylesTextProfile, stylesTextSpinner],
			shadowRoot: this.shadowRoot,
		});
		this._restaurantCategory();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
			<section class="profile">
				<div class="profile__thumbnail">

				</div>
				<div class="profile__content">
					
				</div>
				<div class="profile__action">

				</div>
			</section>
		`;
	}

	_renderData() {
		const profileThumbnail = this.shadowDOM.querySelector('.profile__thumbnail');
		const profileContent = this.shadowDOM.querySelector('.profile__content');

		profileThumbnail.innerHTML = `
			<img class="profile__image"
				src="${CONFIG.RESTAURANT_PICTURES.MEDIUM(this._restaurant.pictureId)}" 
				alt="${this._restaurant.name} Image"
			/>
		`;

		profileContent.innerHTML = `
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
				${this._restaurant.address}, ${this._restaurant.city}
			</p>
		`;
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
