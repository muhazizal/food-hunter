import DrawerHelper from '../utils/drawer-helper';

class App {
	constructor({ toggle, drawer, drawerItems, content }) {
		this._toggle = toggle;
		this._drawer = drawer;
		this._drawerItems = drawerItems;
		this._content = content;

		this._initAppShell();
	}

	_initAppShell() {
		DrawerHelper.init({
			toggle: this._toggle,
			drawer: this._drawer,
			drawerItems: this._drawerItems,
		});
	}

	async renderPage() {
		const url = UrlParser;
	}
}

export default App;
