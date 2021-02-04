import React, { Fragment, useContext, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Data from '../users/Data';
import Spinner from '../layout/Spinner';
import ContactContext from '../../context/data/dataContext';

const Home = () => {
	const contactContext = useContext(ContactContext);
	const { getData, loading } = contactContext;
	useEffect(() => {
		getData();
	}, []);

	return (
		<Fragment>
			<Navbar />
			<br />
			<Data />
		</Fragment>
	);
};
export default Home;
