/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
				gridTemplateRows: {
					'sm': 'repeat(6, 182px)',
					'md': '182px 158px 182px',
					'lg': '182px 158px'
				}
		},
	},
	plugins: [],
}
