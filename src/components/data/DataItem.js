import React from 'react';
import PropTypes from 'prop-types';

const DataItem = ({
	data: {
		FirstName,
		LastName,
		UserName,
		Email,
		Gender,
		PaymentMethod,
		CreditCardNumber,
		PhoneNumber,
		URL,
		LastLogin,
		CreditCardType,
		DomainName,
		Latitude,
		Longitude,
		MacAddress,
	},
}) => {
	return (
		<tr>
			<td>{FirstName}</td>
			<td>{LastName}</td>
			<td>{UserName}</td>
			<td>{Email}</td>
			<td>{Gender}</td>
			<td>{PaymentMethod}</td>
			<td>{CreditCardNumber}</td>
			<td>{PhoneNumber}</td>
			<td>{URL}</td>
			<td>{LastLogin}</td>
			<td>{CreditCardType}</td>
			<td>{DomainName}</td>
			<td>{Latitude}</td>
			<td>{Longitude}</td>
			<td>{MacAddress}</td>
		</tr>
	);
};

DataItem.propTypes = {
	data: PropTypes.object.isRequired,
};

export default DataItem;
