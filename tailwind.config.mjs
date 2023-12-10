/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},

		colors: {
			'white': '#ffffff',
			'cyan-blue': '#0dcaf0',
			'cyan-blue-hover': '#2990d4',
			'black-opacity': '#00000055',
			'dark-gray': '#212529',
			'gray': '#50575c',
			'yellow': '#ffca2c',
			'yellow-hover': '#eabb30',
			'navy-blue': '#0e385e',
			'navy-blue-200': '#0f3353'
		}
	},
	plugins: [],
}
