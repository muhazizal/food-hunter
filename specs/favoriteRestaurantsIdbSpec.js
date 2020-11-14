import { itActsAsFavoriteRestaurantsModel } from './contract/favoriteRestaurantsContract';
import FavoriteRestaurants from '../src/scripts/data/favorite-restaurants';

describe('Favorite Restaurants IDB Contract Test Implementation', () => {
	afterEach(async () => {
		(await FavoriteRestaurants.getAllRestaurants()).forEach(async (restaurant) => {
			await FavoriteRestaurants.deleteRestaurant(restaurant.id);
		});
	});

	itActsAsFavoriteRestaurantsModel(FavoriteRestaurants);
});
