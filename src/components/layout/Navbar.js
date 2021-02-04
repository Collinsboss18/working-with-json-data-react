import React, { useContext, useRef, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';

const Navbar = () => {
	const dataContext = useContext(DataContext);
	const { getData, filterData, clearData } = dataContext;
	const text = useRef('');

	const onChange = (e) => {
		filterData(text.current.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		filterData(text.current.value);
	};

	return (
		<nav className={'blue mb4 fixed'}>
			<div className={'nav-wrapper'}>
				<form onSubmit={onSubmit}>
					<div className={'input-field'}>
						<input
							type={'search'}
							id={'search'}
							placeholder={'Search by First Name, Last Name or Credit Card Type '}
							ref={text}
							onChange={onChange}
						/>
						<label className={'label-icon'} htmlFor={'search'}>
							<i className={'fa fa-search'} />
						</label>
						<i className={'fa fa-close fa-2x'} />
					</div>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
