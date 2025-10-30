import CONFIG from './config'

const API_ENDPOINT = {
	RESTAURANTS_LIST: `${CONFIG.BASE_URL}api/list`,
	RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}api/detail/${id}`,
	SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}api/search?q=${query}`,
	ADD_REVIEW: `${CONFIG.BASE_URL}api/review`,
}

export default API_ENDPOINT
