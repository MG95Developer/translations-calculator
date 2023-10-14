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

const resetBtn = document.getElementById('reset-btn').addEventListener("click", resetPage)