// Init State and Actions
import React, { useReducer } from 'react';
import axios from 'axios';
import DataContext from './dataContext';
import DataReducer from './dataReducer';
import { FILTER_METHOD, FILTER_DATA, SET_LOADING, GET_DATA, ERROR, CLEAR_ERROR, FILTER_GENDER } from '../types';

const GithubState = (props) => {
	const initialState = {
		data: [],
		filtered: null,
		loading: true,
		error: null,
	};

	const [state, dispatch] = useReducer(DataReducer, initialState);

	// Get Single User
	// @param: Login as Username
	const getData = async () => {
		try {
			setLoading();
			const res = await axios.get(`https://api.enye.tech/v1/challenge/records`);
			res.status === 200
				? dispatch({
						type: GET_DATA,
						payload: res.data.records.profiles,
				  })
				: // if internally there are errors
				  dispatch({ type: ERROR });
		} catch (err) {
			dispatch({ type: ERROR });
		}
	};

	// Filter data
	const filterData = (text) => {
		dispatch({ type: FILTER_DATA, payload: text });
	};

	// Filter gender
	const filterGender = (gender) => {
		dispatch({ type: FILTER_GENDER, payload: gender });
	};

	// Filter by payment method
	const filterPaymentMethod = (method) => {
		dispatch({ type: FILTER_METHOD, payload: method });
	};

	// Clear errors
	const clearError = () => dispatch({ type: CLEAR_ERROR });

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<DataContext.Provider
			value={{
				data: state.data,
				filtered: state.filtered,
				loading: state.loading,
				error: state.error,
				getData,
				clearError,
				filterData,
				filterGender,
				filterPaymentMethod,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};
export default GithubState;
