const CONFIG = {
	BASE_URL: ' https://restaurant-api.dicoding.dev/',
	RESTAURANT_PICTURES: {
		SMALL: (id) => `https://restaurant-api.dicoding.dev/images/small/${id}`,
		MEDIUM: (id) => `https://restaurant-api.dicoding.dev/images/medium/${id}`,
		LARGE: (id) => `https://restaurant-api.dicoding.dev/images/large/${id}`,
	},
	DEFAULT_LANGUAGE: 'en-us',
	CACHE_NAME: new Date().toISOString(),
	DATABASE_NAME: 'favorite-restaurants-database',
	DATABASE_VERSION: 1,
	OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
