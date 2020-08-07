import React from 'react';
import './NewsCard.css';
import { withRouter } from 'react-router-dom';
import NewsDate from '../NewsDate/NewsDate.js'
import getHostFromUrl from '../../modules/getHostFromUrl.js'


const NewsCard = props => {
	return (
		<div className="news-item" >
			<div className="news-item__title" onClick={() => { props.history.push('/page/' + props.id) }}>
				<h2>{props.title}</h2>
			</div>
			<div className="news-item__info">
				<a href={props.url} className="news-item__source" target="_blank" rel="noopener noreferrer">{getHostFromUrl(props.url)}</a>
				<NewsDate
					day={props.day}
					month={props.month}
				/>
			</div>
		</div>
	)
};

export default withRouter(NewsCard);