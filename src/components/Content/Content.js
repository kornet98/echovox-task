import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import NewsDetail from '../NewsDetail/NewsDetail.js';
import Pagination from '../Pagination/Pagination.js';



const Content = ({ data, id }) => {
	const [currentItem, setCurrentItem] = useState(id ? id : 0)

	useEffect(() => {
		setCurrentItem(id ? id - 1 : 0)
	}, [id])

	const paginate = pageNumber => setCurrentItem(pageNumber - 1);

	return (
		<div>
			<Pagination
				postsPerPage={1}
				totalPosts={data.length}
				paginate={paginate}
			/>
			<NewsDetail
				newsItems={data[currentItem]}
			/>
		</div>
	)
}

export default withRouter(Content);
