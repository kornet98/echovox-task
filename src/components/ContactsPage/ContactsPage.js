import React from 'react';
import './ContactsPage.css';
import avatar from './avatar.jpg';



const ContactsPage = () => {
	return (
		<div className="contacts">
			<div className="container">
				<div className="contacts-wrapper">
					<div className="info">
						<a href="tel: +3 (097) 773 78 33" className="contacts__nuber">+3 (097) 773 78 33</a>
						<h2 className="info__author-name">Danylko<br></br>Volodymyr</h2>
						<p className="info__mail">danylko91@gmail.com</p>
						<p className="info__position">JavaScript developer</p>
						<p className="info__skills">ES5, ES6, <span className="blue">React</span></p>
					</div>
					<div className="photo">
						<img src={avatar} alt="avatar" />
					</div>

				</div>
			</div>
		</div>
	)
};

export default ContactsPage;