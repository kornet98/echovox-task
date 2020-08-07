import React from 'react';
import './NewsDate.css';

const NewsDate = ({ day, month }) => {
	return (
		<div className="news-item__date">
			<span className="news-item__day">{day}</span>
			<span className="news-item__month">{month}</span>
		</div>
	);
}

export default NewsDate;