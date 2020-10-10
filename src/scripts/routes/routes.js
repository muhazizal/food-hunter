import Home from '../views/pages/home';
import Restaurant from '../views/pages/restaurant';

const routes = {
	'/': Home,
	'/home': Home,
	'/restaurant/:id': Restaurant,
};

export default routes;
