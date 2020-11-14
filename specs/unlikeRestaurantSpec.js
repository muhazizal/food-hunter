import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantsIDB from '../src/scripts/data/favorite-restaurants-idb';

const createLikeButtonContainer = () => {
	document.body.innerHTML = `
		<div class="profile">
			<div class="profile__action"></div>
		</div>
	`;
};

describe('Unlike a Restaurant', () => {
	beforeEach(async () => {
		createLikeButtonContainer();
		await FavoriteRestaurantsIDB.putRestaurant({ id: 1 });
	});

	afterEach(async () => {
		await FavoriteRestaurantsIDB.deleteRestaurant(1);
	});

	it('should display unlike widget when the restaurant has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
	});

	it('should not display like widget when the restaurant has been liked', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
	});

	it('should be able to remove liked movie from the list', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantsIDB.getAllRestaurants()).toEqual([]);
	});

	it('should not throw error if the unliked restaurant is not in the list', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		await FavoriteRestaurantsIDB.deleteRestaurant(1);

		document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantsIDB.getAllRestaurants()).toEqual([]);
	});
});
