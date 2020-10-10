import RestaurantsSource from '../../data/restaurants-source';
import '../components/home/jumbotron';
import '../components/home/restaurants';
import '../components/home/newsletters';
import '../components/footer';

const Home = {
	async render() {
		return `
      <home-jumbotron></home-jumbotron>
      <home-restaurants></home-restaurants>
			<home-newsletter></home-newsletter>
    `;
	},

	async afterRender() {
		const restaurants = document.querySelector('home-restaurants');
		const restaurantsList = await RestaurantsSource.restaurantsList();
		restaurants.renderData(restaurantsList);
	},
};

export default Home;
