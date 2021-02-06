import React, { useContext, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Data from '../data/Data';
import Filter from '../filter/Filter';
import ContactContext from '../../context/data/dataContext';
import 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

const Home = () => {
	const contactContext = useContext(ContactContext);
	const { getData } = contactContext;

	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<Navbar />
			<br />
			<Filter />
			<br />
			<Data />
		</div>
	);
};
export default Home;
