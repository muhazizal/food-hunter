import data from '../../DATA.json';

document.addEventListener('DOMContentLoaded', () => {
	// Init data restaurants from file DATA.json
	const restaurants = data.restaurants;

	// Init restaurants container and list
	const restaurantsContainer = document.querySelector('#restaurants-list');
	let restaurantsList = '';

	// Looping through data restaurants
	restaurants.forEach((restaurant) => {
		// Store data restaurants to restaurants list,
		restaurantsList += `
      <article class="restaurant">
        <div class="restaurant__thumbnail">
          <img class="restaurant__image" src="${restaurant.pictureId}" alt="${restaurant.name} Image" />
          <p class="restaurant__city">${restaurant.city}</p>
        </div>
        <div class="restaurant__content">
          <h3 class="restaurant__name"><a href="#">${restaurant.name}</a></h3>
          <p class="restaurant__rating">
            <span class="material-icons restaurant__rating--icon">star</span>
            ${restaurant.rating}
          </p>
          <p class="restaurant__description">${restaurant.description.replace(/^(.{200}[^\s]*).*/, '$1')}</p>
        </div>
      </article>
    `;
	});

	// Append restaurant list to the container
	restaurantsContainer.innerHTML = restaurantsList;
});
