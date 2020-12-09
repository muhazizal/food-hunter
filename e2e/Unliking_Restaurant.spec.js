const assert = require('assert');

Feature('Unliking_Restaurant');

Before(async (I) => {
	I.amOnPage('/');

	I.seeElement('.restaurant__name a');

	const firstRestaurant = locate('.restaurant__name a').first();
	const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
	I.scrollTo('.restaurants__label');
	I.wait(2);
	I.click(firstRestaurant);

	I.seeElement('.btn--favorite');
	I.click('.btn--favorite');

	I.amOnPage('/#/favorites');
	I.seeElement('.restaurant');
	const likedRestaurantTitle = await I.grabTextFrom('.restaurant__name a');

	assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async (I) => {
	I.amOnPage('/#/favorites');

	I.scrollTo('.restaurants__label');
	I.wait(2);

	I.seeElement('.restaurant__name a');
	const firstRestaurant = locate('.restaurant__name a').first();
	I.click(firstRestaurant);

	I.seeElement('.btn--favorite');
	I.click('.btn--favorite');

	I.amOnPage('/#/favorites');
	I.dontSee('.restaurant__name a');
});
