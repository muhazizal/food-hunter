import data from '../../DATA.json';

document.addEventListener('DOMContentLoaded', () => {
	// Data restaurants from file DATA.json
	const restaurants = data.restaurants;

	// Restaurants container and restaurants list
	const restaurantsContainer = document.querySelector('#restaurants-list');
	let restaurantsList = '';

	// Looping through data restaurants
	restaurants.forEach(restaurant => {
		// Store data restaurants to restaurants list,
		restaurantsList += `
      <div class="restaurant">
        <div class="restaurant__thumbnail">
          <img class="restaurant__image" src="${restaurant.pictureId}" alt="${restaurant.name} Image" />
          <p class="restaurant__city">${restaurant.city}</p>
        </div>
        <div class="restaurant__content">
          <h3 class="restaurant__name">${restaurant.name}</h3>
          <p class="restaurant__rating">${restaurant.rating}</p>
          <p class="restaurant__description">${restaurant.description.replace(/^(.{200}[^\s]*).*/, '$1')}</p>
        </div>
      </div>
    `;
	});

	// Append restaurant list to the container
	restaurantsContainer.innerHTML = restaurantsList;
});
