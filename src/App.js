import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import DataState from './context/data/DataState';

// Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import './App.css';

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	}, []);
	return (
		<DataState>
			<Router>
				<div className="App">
					<div className={''}>
						<Switch>
							<Route exact path={'/'} component={Home} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</DataState>
	);
};

export default App;
