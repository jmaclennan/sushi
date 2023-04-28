const themeColors = require('./colors.ts').themeColors;
const fonts = require('./fonts.ts').fonts;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: 'black',
        white: 'white',
				...themeColors,
			},
			...fonts
		},
	},
	plugins: [],
}
