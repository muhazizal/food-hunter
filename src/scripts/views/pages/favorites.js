import FavoriteRestaurantsIDB from '../../data/favorite-restaurants-idb';
import '../components/favorites/favorite-restaurants';
import '../components/renderError';

const Restaurant = {
	async render() {
		return `
			<favorite-restaurants></favorite-restaurants>
    `;
	},

	async afterRender() {
		const favoritesRestaurants = document.querySelector('favorite-restaurants');
		const spinnerContainer = favoritesRestaurants.shadowRoot.querySelector('.restaurants__label');
		const favoritesListContainer = favoritesRestaurants.shadowRoot.querySelector('.restaurants__list');

		spinnerContainer.classList.add('spinner');

		try {
			const dataRestaurants = await FavoriteRestaurantsIDB.getAllRestaurants();
			favoritesRestaurants.restaurants = dataRestaurants;
			spinnerContainer.classList.remove('spinner');
		} catch (error) {
			spinnerContainer.classList.remove('spinner');
			const renderErrorElement = document.createElement('render-error');
			favoritesListContainer.appendChild(renderErrorElement);
			console.log(error);
		}
	},
};

export default Restaurant;
