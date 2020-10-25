import CONFIG from '../../../globals/config';
import FavoriteRestaurantsIDB from '../../../data/favorite-restaurants-idb';
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
		this._renderLikeButton();
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
				${this._restaurant.address}
			</p>
			<button class="btn--favorite">
				<i class="material-icons" id="favorite-icon">favorite_border</i>
			</button>
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

	async _renderLikeButton() {
		if (await this._isRestaurantExist()) {
			this._renderLiked();
		} else {
			this._renderLike();
		}
	}

	async _isRestaurantExist() {
		return FavoriteRestaurantsIDB.getRestaurant(this._restaurant.id);
	}

	_renderLike() {
		this.shadowDOM.querySelector('#favorite-icon').innerHTML = 'favorite_border';

		const likeButton = this.shadowDOM.querySelector('.btn--favorite');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestaurantsIDB.putRestaurant(this._restaurant);
			this._renderLikeButton();
		});
	}

	_renderLiked() {
		this.shadowDOM.querySelector('#favorite-icon').innerHTML = 'favorite';

		const likeButton = this.shadowDOM.querySelector('.btn--favorite');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestaurantsIDB.deleteRestaurant(this._restaurant.id);
			this._renderLikeButton();
		});
	}
}

customElements.define('restaurant-profile', RestaurantProfile);
