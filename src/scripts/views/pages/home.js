import RestaurantsSource from '../../data/restaurants-source';
import '../components/home/jumbotron';
import '../components/home/restaurants-list';
import '../components/home/newsletters';
import '../components/renderError';

const Home = {
	async render() {
		return `
      <home-jumbotron></home-jumbotron>
      <home-restaurants></home-restaurants>
			<home-newsletter></home-newsletter>
    `;
	},

	async afterRender() {
		const homeRestaurants = document.querySelector('home-restaurants');
		const restaurantListContainer = homeRestaurants.shadowRoot.querySelector('.restaurants__list');
		const spinnerContainer = homeRestaurants.shadowRoot.querySelector('.restaurants__label');

		spinnerContainer.classList.add('spinner');
		try {
			const dataRestaurants = await RestaurantsSource.restaurantsList();
			homeRestaurants.restaurants = dataRestaurants;
			spinnerContainer.classList.remove('spinner');
		} catch (error) {
			spinnerContainer.classList.remove('spinner');
			const renderErrorElement = document.createElement('render-error');
			restaurantListContainer.appendChild(renderErrorElement);
			console.log(error);
		}
	},
};

export default Home;
