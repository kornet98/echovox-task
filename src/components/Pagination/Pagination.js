import React from 'react';
import { withRouter } from 'react-router-dom';


const Pagination = (props) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(props.totalPosts); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li
						key={number}
						className='page-link'
						onClick={() => {
							props.history.push('/page/' + number);
							props.paginate(number)
						}}
					>{number}
					</li>
				))}
			</ul>
		</nav >
	);
};

export default withRouter(Pagination);