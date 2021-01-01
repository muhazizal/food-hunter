import FavoriteRestaurants from '../../data/favorite-restaurants';
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
		const favoritesListContainer = document.querySelector('.restaurants__list');

		try {
			const dataRestaurants = await FavoriteRestaurants.getAllRestaurants();
			favoritesRestaurants.restaurants = dataRestaurants;
		} catch (error) {
			const renderErrorElement = document.createElement('render-error');
			favoritesListContainer.appendChild(renderErrorElement);
		}
	},
};

export default Restaurant;
