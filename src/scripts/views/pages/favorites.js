import FavoriteRestaurantsIDB from '../../data/favorite-restaurants-idb';
import '../components/favorites/favorite-restaurants';

const Restaurant = {
	async render() {
		return `
			<favorite-restaurants></favorite-restaurants>
    `;
	},

	async afterRender() {
		const favoritesRestaurants = document.querySelector('favorite-restaurants');

		try {
			const dataRestaurants = await FavoriteRestaurantsIDB.getAllRestaurants();
			favoritesRestaurants.restaurants = dataRestaurants;
		} catch (error) {
			console.log(error);
		}
	},
};

export default Restaurant;
