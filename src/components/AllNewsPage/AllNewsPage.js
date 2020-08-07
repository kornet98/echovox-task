import React from 'react';
import NewsList from '../NewsList/NewsList.js';
import PageTitle from '../PageTitle/PageTitle.js'



const AllNewsPage = ({ newsItems }) => {
	return (
		<div className="news">
			<div className="container">
				<div className="page-title">
					<PageTitle
						title={'Быть в курсе событий'}
					/>
				</div>
				<NewsList
					newsItems={newsItems}
					count={18}
				/>
			</div>
		</div>
	)
};

export default AllNewsPage;