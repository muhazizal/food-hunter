import RestaurantsSource from '../../data/restaurants-source';
import '../components/jumbotron';
import '../components/restaurants';
import '../components/newsletters';

const Home = {
	async render() {
		return `
      <home-jumbotron></home-jumbotron>
      
      <home-restaurants></home-restaurants>

      <home-newsletter></home-newsletter>
    `;
	},

	async afterRender() {
		const restaurantsList = await RestaurantsSource.restaurantsList();
		const restaurants = document.querySelector('home-restaurants');

		restaurants.renderData(restaurantsList);
	},
};

export default Home;
