import React, { useContext } from 'react';
import DataItem from './DataItem';
import Spinner from '../layout/Spinner';
import DataContext from '../../context/data/dataContext';

const Data = () => {
	const dataContext = useContext(DataContext);
	const { data, loading, filtered } = dataContext;

	// debugger;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className={'container'} style={{ overflowX: 'auto' }}>
				<table className={'display responsive-table'} id="table_id">
					<thead>
						<tr>
							<th>FirstName</th>
							<th>LastName</th>
							<th>UserName</th>
							<th>Email</th>
							<th>Gender</th>
							<th>PaymentMethod</th>
							<th>CreditCardNumber</th>
							<th>PhoneNumber</th>
							<th>URL</th>
							<th>LastLogin</th>
							<th>CreditCardType</th>
							<th>DomainName</th>
							<th>Latitude</th>
							<th>Longitude</th>
							<th>MacAddress</th>
						</tr>
					</thead>
					<tbody>
						{filtered !== null
							? filtered.map((dt) => <DataItem key={dt.MacAddress} data={dt} />)
							: data.map((dt) => <DataItem key={dt.MacAddress} data={dt} />)}
					</tbody>
				</table>
			</div>
		);
	}
};

export default Data;
