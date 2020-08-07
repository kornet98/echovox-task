import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
import './NewsList.css';

import cutSourceOfNews from '../../modules/cutSourceOfNews.js'

import getDayFromStringDate from '../../modules/getDayFromStringDate.js'
import getMonthFromStringDate from '../../modules/getMonthFromStringDate.js'

const NewsList = ({ newsItems }) => {

	return (
		<div className="news-list">
			{newsItems && newsItems.map((item, index) => (
				< NewsCard
					key={index}
					id={index}
					title={cutSourceOfNews(item.title)}
					source={item.source.name}
					url={item.url}
					content={item.content}
					day={getDayFromStringDate(item.publishedAt)}
					month={getMonthFromStringDate(item.publishedAt)}
				/>
			))}
		</div>
	)
}

export default NewsList;