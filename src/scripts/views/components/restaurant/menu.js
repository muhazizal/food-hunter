import styleText from '../../../../styles/components/restaurant/menu.scss';

class Menu extends HTMLElement {
	constructor() {
		super();

		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	set menu(menu) {
		this._menu = menu;
		this._renderTemplate();
		this._renderStyle();
		this._renderFoods();
		this._renderDrinks();
	}

	_renderTemplate() {
		console.log(this._menu);

		this.shadowDOM.innerHTML = `
			<section class="menu">
				<div class="menu__inner">
					<h2 class="menu__title">Our Menus</h2>
					<div class="menu__foods">
						<h3 class="food__title">Foods</h3>
						<ul class="food__list">
						</ul>
					</div>
					<div class="menu__drinks">
						<h3 class="drink__title">Drinks</h3>
						<ul class="drink__list">
						</ul>
					</div>
				</div>
      </section>
    `;
	}

	_renderStyle() {
		const styleMenu = document.createElement('style');
		styleMenu.type = 'text/css';
		styleMenu.appendChild(document.createTextNode(styleText));

		this.shadowDOM.appendChild(styleMenu);
	}

	_renderFoods() {
		const foodList = this.shadowDOM.querySelector('.food__list');

		this._menu.foods.forEach((food) => {
			foodList.innerHTML += `
				<li>${food.name}</li>
			`;
		});
	}

	_renderDrinks() {
		const drinkList = this.shadowDOM.querySelector('.drink__list');

		this._menu.drinks.forEach((drink) => {
			drinkList.innerHTML += `
				<li>${drink.name}</li>
			`;
		});
	}
}

customElements.define('restaurant-menu', Menu);
