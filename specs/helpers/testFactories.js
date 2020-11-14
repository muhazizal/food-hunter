import LikeButtonPresenter from '../../src/scripts/views/components/restaurant/like-button-presenter';

const createLikeButtonPresenterWithRestaurants = async (restaurants) => {
	await LikeButtonPresenter.init({
		profileShadowRoot: document.querySelector('.profile'),
		likeButtonContainer: document.querySelector('.profile__action'),
		restaurants,
	});
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurants };
