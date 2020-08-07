import React from 'react';
import './MainPage.css';
import NewsList from '../NewsList/NewsList.js';
import { NavLink } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle.js'


const MainPage = ({ newsItems }) => {


	return (
		<div className="main">
			<div className="container">
				<div className="page-title">
					<PageTitle
						title={'Always fresh news'}
					/>
				</div>
				<NewsList
					newsItems={newsItems}
					count={6}
				/>
				<NavLink to="/news" exact className="nav-btn">All news</NavLink>
			</div>
		</div>
	)
};

export default MainPage;