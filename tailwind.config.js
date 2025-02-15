/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gris: '#F8EEDF',
				'verde-oscuro': '#003B33',
				'verde-claro': '#345545',
				mostaza: '#FFAE58',
			},
			fontFamily: {
				america: ['GT America', 'sans-serif'],
			},
			maxWidth: {
				section: '1440px',
			},
		},
	},
	daisyui: {
		themes: ['cupcake'],
	},
}
