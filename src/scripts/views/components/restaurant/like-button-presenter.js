import FavoriteRestaurantsIDB from '../../../data/favorite-restaurants-idb';

const LikeButtonPresenter = {
	async init({ profileShadowRoot, likeButtonContainer, restaurants }) {
		this._profileShadowRoot = profileShadowRoot;
		this._likeButtonContainer = likeButtonContainer;
		this._restaurants = restaurants;

		await this._renderButton();
	},

	async _renderButton() {
		if (await this._isRestaurantExist(this._restaurants.id)) {
			this._renderUnlikedRestaurantButton();
		} else {
			this._renderLikeRestaurantButton();
		}
	},

	async _isRestaurantExist(id) {
		const restaurant = await FavoriteRestaurantsIDB.getRestaurant(id);
		return !!restaurant;
	},

	_renderLikeRestaurantButton() {
		this._likeButtonContainer.innerHTML = `
      <button class="btn--favorite" aria-label="like this restaurant">
        <i class="material-icons" id="favorite-icon">favorite_border</i>
      </button>
    `;

		const likeButton = this._profileShadowRoot.querySelector('.btn--favorite');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestaurantsIDB.putRestaurant(this._restaurants);
			this._renderButton();
		});
	},

	_renderUnlikedRestaurantButton() {
		this._likeButtonContainer.innerHTML = `
      <button class="btn--favorite" aria-label="unlike this restaurant">
        <i class="material-icons" id="favorite-icon">favorite</i>
      </button>
    `;

		const likeButton = this._profileShadowRoot.querySelector('.btn--favorite');
		likeButton.addEventListener('click', async () => {
			await FavoriteRestaurantsIDB.deleteRestaurant(this._restaurants.id);
			this._renderButton();
		});
	},
};

export default LikeButtonPresenter;
