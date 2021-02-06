import React, { useContext } from 'react';
import DataContext from '../../context/data/dataContext';

const Filter = () => {
	const dataContext = useContext(DataContext);
	const { filterGender, filterPaymentMethod } = dataContext;

	return (
		<div className={'row center'}>
			<div className={'col s12 m6 offset-m3'}>
				<div className="card blue darken-1">
					<div className={'card-content white-text row'}>
						<span className="card-title">Filter Content</span>
						<div className={'col m6 '}>
							<form action="#" className={'left-align'}>
								<h6>Gender</h6>
								<p>
									<label>
										<input name="group1" value="All" type="radio" onChange={(e) => filterGender(e.target.value)} />
										<span>All</span>
									</label>
								</p>
								<>
									<label>
										<input name="group1" value="Female" type="radio" onChange={(e) => filterGender(e.target.value)} />
										<span>Female</span>
									</label>
								</>
								<p>
									<label>
										<input name="group1" value="Male" type="radio" onChange={(e) => filterGender(e.target.value)} />
										<span>Male and Female</span>
									</label>
								</p>
								<p>
									<label>
										<input name="group1" value="Prefer to skip" type="radio" onChange={(e) => filterGender(e.target.value)} />
										<span>Prefer to skip</span>
									</label>
								</p>
							</form>
						</div>
						<div className={'col m6'}>
							<form action="#" className={'left-align'}>
								<h6>Payment Method</h6>
								<p>
									<label>
										<input name="group1" value="money order" type="radio" onChange={(e) => filterPaymentMethod(e.target.value)} />
										<span>Money Order</span>
									</label>
								</p>
								<>
									<label>
										<input name="group1" value="cc" type="radio" onChange={(e) => filterPaymentMethod(e.target.value)} />
										<span>CC</span>
									</label>
								</>
								<p>
									<label>
										<input name="group1" value="check" type="radio" onChange={(e) => filterPaymentMethod(e.target.value)} />
										<span>Check</span>
									</label>
								</p>
								<p>
									<label>
										<input name="group1" value="paypal" type="radio" onChange={(e) => filterPaymentMethod(e.target.value)} />
										<span>Paypal</span>
									</label>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
