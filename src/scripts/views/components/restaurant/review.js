import stylesText from '../../../../styles/components/restaurant/review.scss';
import StylesHelper from '../../../utils/styles-helper';
import './review-modal';

class Review extends HTMLElement {
	constructor() {
		super();

		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	set restaurant(restaurant) {
		this._restaurant = restaurant;
		this._renderTemplate();
		StylesHelper.init({
			stylesText,
			shadowRoot: this.shadowRoot,
		});
		this._openModal(this.shadowDOM.querySelector('.review__modal'));
		this._renderData();
		this._renderReviewModal();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
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
		const reviewListContainer = this.shadowDOM.querySelector('.review__list');

		this._restaurant.consumerReviews.forEach((review) => {
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
		const reviewModalContainer = this.shadowDOM.querySelector('.review__modal');
		const reviewModalElement = document.createElement('review-modal');
		reviewModalElement.restaurant = this._restaurant;
		reviewModalContainer.appendChild(reviewModalElement);
	}

	_openModal(modal) {
		const buttonOpenModal = this.shadowDOM.querySelector('#btn-open-modal');
		buttonOpenModal.addEventListener('click', () => {
			modal.style.display = 'block';
		});
	}
}

customElements.define('restaurant-review', Review);
