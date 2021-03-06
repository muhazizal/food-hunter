import CONFIG from './config';

const API_ENDPOINT = {
	RESTAURANTS_LIST: `${CONFIG.BASE_URL}list`,
	RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
	SEARCH_RESTAURANT: `${CONFIG.BASE_URL}search?q=query`,
	ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
