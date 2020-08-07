import React from 'react';

import './NewsDetail.css';
import PageTitle from '../PageTitle/PageTitle.js';
import NewsDate from '../NewsDate/NewsDate.js'
import getHostFromUrl from '../../modules/getHostFromUrl.js'
import getDayFromStringDate from '../../modules/getDayFromStringDate.js'
import getMonthFromStringDate from '../../modules/getMonthFromStringDate.js'




const NewsDetail = ({ newsItems }) => {

	return (
		< div className="news-detail" >
			{newsItems && (
				<div className="container">
					<div className="news-wrapper">
						<div className="about">
							<PageTitle
								title={newsItems.title}
							/>
							<a href={newsItems.url} className="about__source" target="_blank" rel="noopener noreferrer">{getHostFromUrl(newsItems.url)}</a>
							<NewsDate
								day={getDayFromStringDate(newsItems.publishedAt)}
								month={getMonthFromStringDate(newsItems.publishedAt)}
							/>
						</div>
						<div className="content">
							<img src={newsItems.urlToImage} className="content__img" alt="img" />
							<p className="content__text">{newsItems.content}</p>
						</div>
					</div>
				</div>
			)}
		</div >
	)
}

export default NewsDetail;