/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'custom-black': '#30363d',
				'custom-white': '#f6f8fa',
				'custom-green': 'rgb(126, 231, 135)',
				'call-to-action': '#dd7df7',
			},
		},
	},
	plugins: [],
};

