function alphabetPosition(text) {
	return text	.toLowerCase()
		.split(/\W/)
		.join('')
		.split('')
		.map((letter) => (letter.charCodeAt(0) - 96))
		.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))