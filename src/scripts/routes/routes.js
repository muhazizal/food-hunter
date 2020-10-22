import Home from '../views/pages/home';
import Restaurant from '../views/pages/restaurant';
import Favorites from '../views/pages/favorites';

const routes = {
	'/': Home,
	'/home': Home,
	'/restaurant/:id': Restaurant,
	'/favorites': Favorites,
};

export default routes;
