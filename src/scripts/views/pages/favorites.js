import RestaurantsSource from '../../data/restaurants-source';
import '../components/favorites/favorite-restaurants';

const Restaurant = {
	async render() {
		console.log('render');
		return `
			<favorite-restaurants></favorite-restaurants>
    `;
	},

	async afterRender() {
		const favoritesList = document.querySelector('favorite-restaurants');

		try {
			const dataRestaurants = await RestaurantsSource.restaurantsList();
			favoritesList.restaurants = dataRestaurants;
		} catch (error) {
			console.log(error);
		}
	},
};

export default Restaurant;
