import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantsSource {
	static async restaurantsList() {
		const response = await fetch(API_ENDPOINT.RESTAURANTS_LIST)
		const responseJson = await response.json()
		return responseJson.restaurants
	}

	static async restaurantDetail(id) {
		const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id))
		const responseJson = await response.json()
		return responseJson.restaurant
	}

	static async postReviewRestaurant(dataReview) {
		const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Auth-Token': '1234',
			},
			body: JSON.stringify(dataReview),
		})

		const responseJson = await response.json()
		return responseJson
	}
}

export default RestaurantsSource
