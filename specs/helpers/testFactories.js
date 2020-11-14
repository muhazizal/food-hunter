import LikeButtonPresenter from '../../src/scripts/views/components/restaurant/like-button-presenter';
import FavoriteRestaurants from '../../src/scripts/data/favorite-restaurants';

const createLikeButtonPresenterWithRestaurants = async (restaurants) => {
	await LikeButtonPresenter.init({
		profileShadowRoot: document.querySelector('.profile'),
		likeButtonContainer: document.querySelector('.profile__action'),
		restaurants,
		favoriteRestaurants: FavoriteRestaurants,
	});
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurants };
