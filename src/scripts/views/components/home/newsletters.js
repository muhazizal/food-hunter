import stylesText from '../../../../styles/components/home/newsletter.scss';
import StylesHelper from '../../../utils/styles-helper';

class Newsletter extends HTMLElement {
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
		this._formFeedback();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
      <section class="newsletter">
        <h2 class="newsletter__label">Stay Updated</h2>
        <p class="newsletter__tagline">
          Get the lattest <span class="newsletter__brand">Food Hunter</span> newsletters about our best restaurants.
        </p>
        <div class="newsletter__form">
          <form>
            <input type="email" id="email" name="email" placeholder="ex. yourname@domain.com" />
            <span id="emailError"></span>
            <button id="subscribe">Subscribe</button>
          </form>
        </div>
      </section>
    `;
	}

	_formFeedback() {
		const emailInput = this.shadowDOM.querySelector('#email');
		const emailError = this.shadowDOM.querySelector('#emailError');
		const subscribe = this.shadowDOM.querySelector('#subscribe');

		emailInput.addEventListener('focusin', () => {
			emailInput.style.boxShadow = '0 0 3pt 2pt #03dac6';
		});

		emailInput.addEventListener('focusout', () => {
			emailInput.style.boxShadow = 'none';
		});

		subscribe.addEventListener('click', (event) => {
			if (emailInput.value === '' || emailInput.value === null || emailInput.value.indexOf('@') === -1) {
				emailInput.style.boxShadow = '0 0 3pt 2pt #cf6679';
				emailError.innerText = 'Your email not valid';
				emailError.style.padding = '0.8rem 1.2rem';
				emailError.style.backgroundColor = '#cf6679';
				emailError.style.color = 'black';
				emailError.style.borderRadius = '0.5rem';
				emailError.style.display = 'block';
				emailError.style.gridRow = '2 / 3';
				emailError.style.gridColumn = '1 / 2';

				event.preventDefault();
				return;
			}

			emailError.style.display = 'none';
			emailInput.style.boxShadow = 'none';

			alert(`Hello ${emailInput.value}`);
			emailInput.value = '';

			event.preventDefault();
		});
	}
}

customElements.define('home-newsletter', Newsletter);
