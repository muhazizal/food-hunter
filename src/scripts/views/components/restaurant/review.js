import stylesText from '../../../../styles/components/restaurant/review.scss';
import StylesHelper from '../../../utils/styles-helper';

class Review extends HTMLElement {
	constructor() {
		super();

		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
		StylesHelper.init({
			stylesText,
			shadowRoot: this.shadowRoot,
		});
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
              <div class="rating__icons">
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
              </div>
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
}

customElements.define('restaurant-review', Review);
