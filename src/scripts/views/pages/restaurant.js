import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import '../components/restaurant/profile';

const Restaurant = {
	async render() {
		return `
      <restaurant-profile></restaurant-profile>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await RestaurantsSource.restaurantDetail(url.id);
		console.log(restaurant);
	},
};

export default Restaurant;
