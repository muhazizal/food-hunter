const LikeButtonPresenter = {
	async init({ likeButtonContainer, restaurants, favoriteRestaurants }) {
		this._likeButtonContainer = likeButtonContainer;
		this._restaurants = restaurants;
		this._favoriteRestaurants = favoriteRestaurants;

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
		const restaurant = await this._favoriteRestaurants.getRestaurant(id);
		return !!restaurant;
	},

	_renderLikeRestaurantButton() {
		this._likeButtonContainer.innerHTML = `
      <button class="btn--favorite" aria-label="like this restaurant">
        <i class="material-icons" id="favorite-icon">favorite_border</i>
      </button>
    `;

		const likeButton = document.querySelector('.btn--favorite');
		likeButton.addEventListener('click', async () => {
			await this._favoriteRestaurants.putRestaurant(this._restaurants);
			this._renderButton();
		});
	},

	_renderUnlikedRestaurantButton() {
		this._likeButtonContainer.innerHTML = `
      <button class="btn--favorite" aria-label="unlike this restaurant">
        <i class="material-icons" id="favorite-icon">favorite</i>
      </button>
    `;

		const likeButton = document.querySelector('.btn--favorite');
		likeButton.addEventListener('click', async () => {
			await this._favoriteRestaurants.deleteRestaurant(this._restaurants.id);
			this._renderButton();
		});
	},
};

export default LikeButtonPresenter;
