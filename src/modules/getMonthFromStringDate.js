const getMonthFromStringDate = dateStr => {
	let month = new Date(dateStr).getMonth() + 1;

	return month < 10 ? '0' + month : month;
}


export default getMonthFromStringDate;