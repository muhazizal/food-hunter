import styleText from '../../../../styles/components/restaurant/review.scss';

class Review extends HTMLElement {
	constructor() {
		super();

		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
		this._renderStyle();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
      <section class="review">
        <h2 class="review__title">Our Reviews</h2>
        <div class="review__list">
          <div class="review__item">
            <div class="review__people">
              <img src="/images/icons/lego.jpg">
              <p>Odading Mang Oleh</p>
            </div>
            <div class="review__rating">
              <img src="/images/icons/star.svg">
              <p>4.1</p>
            </div>
            <blockquote class="review__content">
              "Makanannya enak, nggak kuat lagi, mantab djiwa, rasanya anjim bangetttttttt"
            </blockquote>
          </div>

          <div class="review__add">
            <button>Add New Review</button>
          </div>
        </div>
      </section>
    `;
	}

	_renderStyle() {
		const styleReview = document.createElement('style');
		styleReview.type = 'text/css';
		styleReview.appendChild(document.createTextNode(styleText));

		this.shadowDOM.appendChild(styleReview);
	}
}

customElements.define('restaurant-review', Review);
