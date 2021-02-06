import React, { Fragment, useContext, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Data from '../data/Data';
import Filter from '../filter/Filter';
import Spinner from '../layout/Spinner';
import ContactContext from '../../context/data/dataContext';
import 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

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
			<Filter />
			<br />
			<Data />
		</Fragment>
	);
};
export default Home;
