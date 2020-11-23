const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
	I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', (I) => {
	I.seeElement('.render__error');
	I.see('You have not saved any restaurants');
});

Scenario('liking one restaurant', async (I) => {
	I.see('You have not saved any restaurants');

	I.amOnPage('/');

	I.seeElement('.restaurant__name a');

	const firstRestaurant = locate('.restaurant__name a').first();
	const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
	I.click(firstRestaurant);

	I.seeElement('.btn--favorite');
	I.click('.btn--favorite');

	I.amOnPage('/#/favorites');
	I.seeElement('.restaurant');
	const likedRestaurantTitle = await I.grabTextFrom('.restaurant__name a');

	assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
