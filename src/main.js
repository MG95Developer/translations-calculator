const wordsTextarea = document.querySelector(
	'.custom-container .inputed-words'
);
const countBtn = document.querySelector('.custom-container .count-btn');
const wordCount = document.querySelector(
	'.custom-container .words-detected span'
);
const displayPrice = document.getElementById('display-price');


// RESET BTN
const resetPage = () =>
{
	location.reload();
}

const resetBtn = document
	.getElementById('reset-btn')
	.addEventListener('click', resetPage);

// count words & calculate cost
const pricePerWordInEuros = 0.1;

const countWords = () => {
	let words = wordsTextarea.value;
	let wordsTrimmed = words.replace(/\s+/g, ' ').trim();
	let splitWords = wordsTrimmed.split(' ');

	// console.log(splitWords);

	let numberOfWords = splitWords.length;
	if (splitWords[0] == '') {
		numberOfWords = 0;
	}
	wordCount.innerHTML = numberOfWords;

	// calculate the cost of this translation
	let costInEuros = 0;

	const calculateCost = () => {
		// calculation
		let calculatedCostInEuros = numberOfWords * pricePerWordInEuros;
		costInEuros += calculatedCostInEuros;
	};

	calculateCost();

	if (costInEuros === 0) {
		displayPrice.innerText = ' ';
	} else {
		displayPrice.innerText = 'Cost: ' + costInEuros.toFixed(2) + ' €.';
	}
};

countBtn.addEventListener('click', countWords);