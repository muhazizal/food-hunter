import FavoriteRestaurants from '../src/scripts/data/favorite-restaurants';
import * as TestFactories from './helpers/testFactories';

const createLikeButtonContainer = () => {
	document.body.innerHTML = `
		<div class="profile">
			<div class="profile__action"></div>
		</div>
	`;
};

describe('Liking a Restaurant', () => {
	beforeEach(() => {
		createLikeButtonContainer();
	});

	it('should show the like button when the restaurant has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
	});

	it('should not show the unlike button when the restaurant has not been liked before', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
	});

	it('should be able to like the restaurant', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		document.querySelector('.btn--favorite').dispatchEvent(new Event('click'));
		const restaurant = await FavoriteRestaurants.getRestaurant(1);

		expect(restaurant).toEqual({ id: 1 });

		FavoriteRestaurants.deleteRestaurant(1);
	});

	it('should not add a restaurant again when it already liked', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({ id: 1 });

		await FavoriteRestaurants.putRestaurant({ id: 1 });

		document.querySelector('.btn--favorite').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([{ id: 1 }]);

		FavoriteRestaurants.deleteRestaurant(1);
	});

	it('should not add a restaurant when it has no id', async () => {
		await TestFactories.createLikeButtonPresenterWithRestaurants({});

		document.querySelector('.btn--favorite').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
	});
});
