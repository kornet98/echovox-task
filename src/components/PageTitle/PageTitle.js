import React from 'react';

const PageTitle = props => {
	let wordsArr = props.title.split(' ');
	let blueWord = wordsArr[wordsArr.length - 1];
	wordsArr.splice(wordsArr.length - 1, 1);
	let blackWords = wordsArr.join(' ') + ' ';
	return (
		<h1>{blackWords}<span className="blue">{blueWord}</span></h1>
	);
}

export default PageTitle;