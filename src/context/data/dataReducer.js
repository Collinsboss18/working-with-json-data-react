import { FILTER_METHOD, FILTER_DATA, SET_LOADING, GET_DATA, ERROR, CLEAR_ERROR, FILTER_GENDER } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				data: action.payload,
				loading: false,
				error: null,
			};

		case FILTER_DATA:
			return {
				...state,
				filtered: state.data.filter((d) => {
					let regex = new RegExp(`${action.payload}`, 'i');
					return d.FirstName.match(regex) || d.LastName.match(regex) || d.CreditCardType.match(regex);
				}),
			};

		case FILTER_GENDER:
			return {
				...state,
				filtered:
					action.payload === 'All'
						? state.data
						: state.data.filter((d) => {
								let regex = new RegExp(`${action.payload}`, 'gi');
								return d.Gender.match(regex);
						  }),
			};

		case FILTER_METHOD:
			return {
				...state,
				filtered: state.data.filter((d) => {
					let regex = new RegExp(`${action.payload}`, 'gi');
					return d.PaymentMethod.match(regex);
				}),
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
