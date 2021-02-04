// Init State and Actions
import React, { useReducer } from 'react';
import axios from 'axios';
import DataContext from './dataContext';
import DataReducer from './dataReducer';
import { CLEAR_DATA, FILTER_DATA, SET_LOADING, GET_DATA, ERROR, CLEAR_ERROR } from '../types';

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
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};
export default GithubState;
