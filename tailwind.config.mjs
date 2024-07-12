/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'karla': ['"Karla Variable"', 'sans-serif']
			}
		},
		colors: {
			'pcyan':'hsl(179, 62%, 43%)', 
			'pbright': 'hsl(71, 73%, 54%)',
			'plgray': 'hsl(204, 43%, 93%)',
			'pgblye': 'hsl(218, 22%, 67%)'
		}
	},
	plugins: [],
}
