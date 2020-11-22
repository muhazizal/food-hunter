import RestaurantSource from '../../../data/restaurants-source';

class ReviewModal extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this._renderTemplate();
		this._closeModal(this.parentElement);
		this._submitReview(this.parentElement);
	}

	set restaurant(restaurant) {
		this._restaurant = restaurant;
	}

	_renderTemplate() {
		this.innerHTML = `
		<div class="modal__inner">
			<div class="modal__header">
				<h3>Add Your Review</h3>
			</div>
			<div class="modal__body">
				<form>
					<label for="name">Name</label>
					<input type="text" id="name" name="name" placeholder="ex: muhazizal">
					<label for="review">Review</label>
					<textarea id="review" name="review" rows="5" placeholder="ex: delicious"></textarea>
				</form>
			</div>
			<div class="modal__footer">
				<button type="button" id="btn-close-modal">Cancel</button>
				<button type="submit" id="btn-submit-modal">Submit</button>
			</div>
		</div>
		`;
	}

	_closeModal(modal) {
		const buttonCloseModal = this.querySelector('#btn-close-modal');
		buttonCloseModal.addEventListener('click', () => {
			modal.style.display = 'none';
		});

		modal.addEventListener('click', (event) => {
			if (event.target === modal) {
				modal.style.display = 'none';
			}
		});
	}

	_submitReview(modal) {
		const buttonSubmit = this.querySelector('#btn-submit-modal');
		const inputName = this.querySelector('#name');
		const inputReview = this.querySelector('#review');

		buttonSubmit.addEventListener('click', async () => {
			if (inputName.value === '' || inputName.value === null) {
				alert('Name is required');
				return;
			}

			if (inputReview.value === '' || inputReview.value === null) {
				alert('Review is required');
				return;
			}

			const dataReview = {
				id: this._restaurant.id,
				name: inputName.value,
				review: inputReview.value,
			};

			try {
				const responsePostReview = await RestaurantSource.postReviewRestaurant(dataReview);
				if (responsePostReview.message === 'success') {
					inputName.value = '';
					inputReview.value = '';
					modal.style.display = 'none';
					alert('Your review has been submitted');
				}
			} catch (error) {
				console.log(error);
			}
		});
	}
}

customElements.define('review-modal', ReviewModal);
