import { itActsAsFavoriteRestaurantsModel } from './contract/favoriteRestaurantsContract';

let favoriteRestaurants = [];

const FavoriteRestaurantsArray = {
	getRestaurant(id) {
		if (!id) {
			return;
		}

		return favoriteRestaurants.find((restaurant) => restaurant.id === id);
	},

	getAllRestaurants() {
		return favoriteRestaurants;
	},

	putRestaurant(restaurant) {
		if (!restaurant.hasOwnProperty('id')) {
			return;
		}

		if (this.getRestaurant(restaurant.id)) {
			return;
		}

		favoriteRestaurants.push(restaurant);
	},

	deleteRestaurant(id) {
		favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
	},
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
	afterEach(() => (favoriteRestaurants = []));

	itActsAsFavoriteRestaurantsModel(FavoriteRestaurantsArray);
});
