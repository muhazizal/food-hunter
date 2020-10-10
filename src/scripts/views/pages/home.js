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
		console.log('after render');
	},
};

export default Home;
