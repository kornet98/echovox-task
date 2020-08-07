import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-logo">
						<div className='logo'>
							<NavLink to="/" activeClassName={"myActive"}>React News</NavLink>
						</div>
						<p>Single Page Application</p>
					</div>
					<div className="footer-author">
						<p>Made by</p>
						<h2 className="author">Volodymyr Danylko</h2>
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;