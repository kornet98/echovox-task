const cutSourceOfNews = title => {
	let i = title.lastIndexOf('-');
	return title.slice(0, i - 1);
}

export default cutSourceOfNews;