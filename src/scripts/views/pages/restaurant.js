import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
// import FavoriteRestaurantsIDB from '../../data/favorite-restaurants-idb';
import LikeButton from '../components/restaurant/like-button';
import '../components/restaurant/profile';
import '../components/restaurant/menu';
import '../components/restaurant/review';
import '../components/renderError';

const Restaurant = {
	async render() {
		return `
			<restaurant-profile></restaurant-profile>
			<restaurant-menu></restaurant-menu>
			<restaurant-review></restaurant-review>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurantProfile = document.querySelector('restaurant-profile');
		const restaurantMenu = document.querySelector('restaurant-menu');
		const restaurantReview = document.querySelector('restaurant-review');
		const mainContainer = document.querySelector('#main-content');
		const spinnerContainer = restaurantProfile.shadowRoot.querySelector('.profile');

		spinnerContainer.classList.add('spinner');

		try {
			const dataRestaurant = await RestaurantsSource.restaurantDetail(url.id);
			restaurantProfile.restaurant = dataRestaurant;
			restaurantMenu.menu = dataRestaurant.menus;
			restaurantReview.restaurant = dataRestaurant;
			spinnerContainer.classList.remove('spinner');

			LikeButton.init({
				profileShadowRoot: restaurantProfile.shadowRoot,
				likeButtonContainer: restaurantProfile.shadowRoot.querySelector('.profile__action'),
				restaurants: dataRestaurant,
			});
		} catch (error) {
			spinnerContainer.classList.remove('spinner');
			const renderErrorElement = document.createElement('render-error');
			mainContainer.appendChild(renderErrorElement);
			renderErrorElement.shadowRoot.querySelector('.render__error').style.marginTop = '10rem';
		}
	},
};

export default Restaurant;
