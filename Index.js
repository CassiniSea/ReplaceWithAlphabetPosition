function alphabetPosition(text) {
	return text
		.toUpperCase()
		.match(/[a-z]/gi)
		.map((char) => char.charCodeAt() - 64)
		.join(' ')
}

function alphabetPosition2(text) {
	let result = '';
	text  .toLowerCase()
		.split('')
		.map((letter) => (
			letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122 ?
				result += letter.charCodeAt(0) - 96 + ' ' :
				''
		))
	return result.trim();
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))