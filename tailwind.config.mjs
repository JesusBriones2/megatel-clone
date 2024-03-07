/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"pale-blue": "#E0EEEC",
				"mid-night-blue": "#00315D",
				"slate-gray": "#6C757D",
				"vivid-blue": "#0095FA",
				"dark-blue": "#0E385E"
			},
			fontFamily: {
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
