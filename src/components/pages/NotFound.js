import React from 'react';

const NotFound = () => {
	return (
		<div>
			<nav className="blue">
				<div class="nav-wrapper container">
					<a href="#" class="brand-logo">
						Json Handler
					</a>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li>
							<a href="/">Go Home</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container">
				<h1>404</h1>
				<h2>Looks like you are lost</h2>
				<a href="/" className="waves-effect waves-light btn-large blue">
					Go home
				</a>
			</div>
		</div>
	);
};
export default NotFound;
