class RestaurantItem extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	connectedCallback() {
		this._renderTemplate();
	}

	_renderTemplate() {
		this.shadowDOM.innerHTML = `
      <section class="profile">
        
      </section>
    `;
	}
}

customElements.define('restaurant-item', RestaurantItem);
