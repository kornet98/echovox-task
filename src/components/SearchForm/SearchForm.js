import React, { useState } from 'react';
import Content from '../Content/Content.js';
import { withRouter } from 'react-router-dom';

const SearchForm = ({ data, match, history }) => {

	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(!match.params.id ? false : true);

	const handleChange = event => {
		setSearchTerm(event.target.value)
		setLoading(false);
	}
	const result = data && data.filter(obj => obj.title.includes(searchTerm))

	const handleSubmit = event => {
		history.push('/page/' + 1);
		setLoading(true)
		event.preventDefault();
	}
	const id = Number(match.params.id)

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="search-form">
				<input type="text" value={searchTerm} onChange={handleChange} />
				<input type="submit" value="Search" />
			</form>

			{loading ?
				<Content
					data={result}
					id={id}
				/> : null
			}
		</div>
	)
}

export default withRouter(SearchForm);
