import { CLEAR_DATA, FILTER_DATA, SET_LOADING, GET_DATA, ERROR, CLEAR_ERROR } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				data: action.payload,
				loading: false,
				error: null,
			};

		case SET_LOADING:
			return {
				...state,
				loading: true,
				error: null,
			};

		case ERROR:
			return {
				...state,
				loading: false,
				error: { msg: 'Check your internet connection', type: 'danger' },
			};
		case CLEAR_ERROR:
			return {
				...state,
				loading: false,
				error: null,
			};

		default:
			return state;
	}
};
