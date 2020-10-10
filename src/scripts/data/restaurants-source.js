import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
	static async restaurantsList() {
		const response = await fetch(API_ENDPOINT.RESTAURANTS_LIST);
		const responseJson = await response.json();
		return responseJson.restaurants;
	}

	static async restaurantDetail(id) {
		const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
		return response.json();
	}
}

export default RestaurantsSource;
