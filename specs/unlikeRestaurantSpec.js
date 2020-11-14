import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurants from '../src/scripts/data/favorite-restaurants';

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
		await FavoriteRestaurants.putRestaurant({ id: 1 });
	});

	afterEach(async () => {
		await FavoriteRestaurants.deleteRestaurant(1);
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

		expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
	});

	it('should not throw error if the unliked restaurant is not in the list', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		await FavoriteRestaurants.deleteRestaurant(1);

		document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
	});
});
