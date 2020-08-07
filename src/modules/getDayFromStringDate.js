const getDayFromStringDate = dateStr => {
	let day = new Date(dateStr).getDate();

	return day < 10 ? '0' + day : day;
}


export default getDayFromStringDate;