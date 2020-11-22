import './review-modal';

class Review extends HTMLElement {
	constructor() {
		super();
	}

	set restaurant(restaurant) {
		this._restaurant = restaurant;
		this._renderTemplate();
		this._openModal(this.querySelector('.review__modal'));
		this._renderData();
		this._renderReviewModal();
	}

	_renderTemplate() {
		this.innerHTML = `
      <section class="review">
        <h2 class="review__title">Our Reviews</h2>
				<div class="review__list">
				
        </div>
				<div class="review__add">
          <button type="button" id="btn-open-modal">Add New Review</button>
				</div>
				<div class="review__modal">
					
				</div>
      </section>
		`;
	}

	_renderData() {
		const reviewListContainer = this.querySelector('.review__list');

		this._restaurant.customerReviews.forEach((review) => {
			reviewListContainer.innerHTML += `
        <div class="review__item">
          <div class="review__people">
            <i class="material-icons">account_circle</i>
            <p>${review.name}</p>
          </div>
          <div class="review__date">
            <i class="material-icons">today</i>
            <p>${review.date}</p>
          </div>
          <blockquote class="review__content">
            "${review.review}"
          </blockquote>
        </div>
      `;
		});
	}

	_renderReviewModal() {
		const reviewModalContainer = this.querySelector('.review__modal');
		const reviewModalElement = document.createElement('review-modal');
		reviewModalElement.restaurant = this._restaurant;
		reviewModalContainer.appendChild(reviewModalElement);
	}

	_openModal(modal) {
		const buttonOpenModal = this.querySelector('#btn-open-modal');
		buttonOpenModal.addEventListener('click', () => {
			modal.style.display = 'block';
		});
	}
}

customElements.define('restaurant-review', Review);
