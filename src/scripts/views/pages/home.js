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
		const restaurantListContainer = document.querySelector('.restaurants__list');

		try {
			const dataRestaurants = await RestaurantsSource.restaurantsList();
			homeRestaurants.restaurants = dataRestaurants;
		} catch (error) {
			const renderErrorElement = document.createElement('render-error');
			restaurantListContainer.appendChild(renderErrorElement);
		}
	},
};

export default Home;
