const DrawerHelper = {
	init({ toggle, drawer, drawerItems }) {
		toggle.addEventListener('click', (event) => {
			this._toggleChange(toggle);
			this._toggleDrawer(event, drawer);
		});

		drawerItems.forEach((drawerItem) => {
			drawerItem.addEventListener('click', (event) => {
				this._toggleChange(toggle);
				this._toggleDrawer(event, drawer);
			});
		});
	},

	_toggleChange(toggle) {
		toggle.classList.toggle('change');
	},

	_toggleDrawer(event, drawer) {
		event.stopPropagation();
		drawer.classList.toggle('open');
	},
};

export default DrawerHelper;
