import RestaurantsSource from '../../data/restaurants-source';
import '../components/home/jumbotron';
import '../components/home/restaurants-list';
import '../components/home/newsletters';

const Home = {
	async render() {
		return `
      <home-jumbotron></home-jumbotron>
      <home-restaurants></home-restaurants>
			<home-newsletter></home-newsletter>
    `;
	},

	async afterRender() {
		const restaurantsList = document.querySelector('home-restaurants');

		try {
			const dataRestaurants = await RestaurantsSource.restaurantsList();
			restaurantsList.restaurants = dataRestaurants;
		} catch (error) {
			console.log(error);
		}
	},
};

export default Home;
