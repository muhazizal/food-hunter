class LikeButtonHelper {
	constructor({ likeButton, likeButtonIcon, favoriteRestaurants, restaurant }) {
		this._likeButton = likeButton;
		this._likeButtonIcon = likeButtonIcon;
		this._favoriteRestaurants = favoriteRestaurants;
		this._restaurant = restaurant;

		this._renderLikeButton();
	}

	async _renderLikeButton() {
		if (await this._isRestaurantExist(this._restaurant.id)) {
			this._renderLiked();
		} else {
			this._renderLike();
		}
	}

	async _isRestaurantExist(id) {
		const restaurant = await this._favoriteRestaurants.getRestaurant(id);
		return !!restaurant;
	}

	_renderLike() {
		this._likeButtonIcon.innerHTML = 'favorite_border';

		this._likeButton.addEventListener('click', async () => {
			await this._favoriteRestaurants.putRestaurant(this._restaurant);
			this._renderLikeButton();
		});
	}

	_renderLiked() {
		this._likeButtonIcon.innerHTML = 'favorite';

		this._likeButton.addEventListener('click', async () => {
			await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
			this._renderLikeButton();
		});
	}
}

export default LikeButtonHelper;
