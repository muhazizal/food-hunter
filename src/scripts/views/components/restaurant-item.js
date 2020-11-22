import CONFIG from '../../globals/config';

class Restaurant extends HTMLElement {
	constructor() {
		super();
	}

	set restaurants(restaurants) {
		this._restaurants = restaurants;
		this._renderTemplate();
	}

	_renderTemplate() {
		this._restaurants.forEach((restaurant) => {
			this.innerHTML += `
        <article class="restaurant">
          <div class="restaurant__thumbnail">
						<img class="restaurant__image" 
							src="${CONFIG.RESTAURANT_PICTURES.MEDIUM(restaurant.pictureId)}" 
							alt="${restaurant.name} Image" 
						/>
            <p class="restaurant__city">${restaurant.city}</p>
          </div>
          <div class="restaurant__content">
						<h3 class="restaurant__name">
							<a href="/#/restaurant/${restaurant.id}">${restaurant.name}</a>
						</h3>
						<p class="restaurant__rating">
							<i class="material-icons">star</i>
              ${restaurant.rating}
            </p>
            <p class="restaurant__description">${restaurant.description.replace(/^(.{150}[^\s]*).*/, '$1')}</p>
					</div>
					<div class="restaurant__action">
						<a href="/#/restaurant/${restaurant.id}">Detail Restaurant</a>
					</div>
        </article>
      `;
		});
	}
}

customElements.define('restaurant-item', Restaurant);
