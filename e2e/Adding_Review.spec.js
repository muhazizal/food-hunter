const assert = require('assert');

Feature('Adding Review');

Before((I) => {
	I.amOnPage('/');
});

Scenario('adding one review', async (I) => {
	I.seeElement('.restaurant__name a');

	const firstRestaurant = locate('.restaurant__name a').first();
	I.click(firstRestaurant);

	I.seeElement('#btn-open-modal');
	I.click('#btn-open-modal');

	I.seeElement('#btn-submit-modal');
	I.fillField('name', 'muhazizal');
	I.fillField('review', 'delicious');
	const customerNameInput = 'muhazizal';
	I.click('#btn-submit-modal');

	I.refreshPage();
	I.refreshPage();
	I.refreshPage();

	const lastCustomerNameReview = locate('.review__people p').last();
	const customerNameReview = await I.grabTextFrom(lastCustomerNameReview);

	assert.strictEqual(customerNameInput, customerNameReview);
});
