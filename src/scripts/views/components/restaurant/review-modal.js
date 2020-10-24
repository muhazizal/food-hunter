import StylesHelper from '../../../utils/styles-helper';
import stylesText from '../../../../styles/components/restaurant/review-modal.scss';

class ReviewModal extends HTMLElement {
	constructor() {
		super();

		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
		console.log(this.parentElement);
		this._closeModal(this.parentElement);
		StylesHelper.init({
			stylesText,
			shadowRoot: this.shadowRoot,
		});
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
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
		const buttonCloseModal = this.shadowDOM.querySelector('#btn-close-modal');
		buttonCloseModal.addEventListener('click', () => {
			modal.style.display = 'none';
		});

		modal.addEventListener('click', (event) => {
			if (event.target === modal) {
				modal.style.display = 'none';
			}
		});
	}
}

customElements.define('review-modal', ReviewModal);
