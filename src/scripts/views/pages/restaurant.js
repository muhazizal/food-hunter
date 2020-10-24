import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import '../components/restaurant/profile';
import '../components/restaurant/menu';
import '../components/restaurant/review';

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

		try {
			const dataRestaurant = await RestaurantsSource.restaurantDetail(url.id);
			restaurantProfile.restaurant = dataRestaurant;
			restaurantMenu.menu = dataRestaurant.menus;
			restaurantReview.reviews = dataRestaurant.consumerReviews;
		} catch (error) {
			console.log(error);
		}
	},
};

export default Restaurant;
