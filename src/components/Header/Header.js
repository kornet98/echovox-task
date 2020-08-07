import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="head-wrapper">
					<div className='logo'>
						<NavLink to="/" activeClassName={"myActive"}>React News</NavLink>
					</div>
					<nav className='navigation'>
						<li>
							<NavLink to="/page/1" exact>Search</NavLink>
						</li>
						<li>
							<NavLink to="/" exact>Main</NavLink>
						</li>
						<li>
							<NavLink to="/news" exact>News</NavLink>
						</li>
						<li>
							<NavLink to="/contacts" exact>Contacts</NavLink>
						</li>

					</nav>
				</div>
			</div>
		</header >
	)
};

export default Header;