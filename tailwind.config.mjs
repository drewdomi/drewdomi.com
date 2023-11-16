/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/theming/themes")['dark'],
					'primary': '#005AAD',
					'seconday': '#CA1D1D',
					'accent': '#0E1337',
					'neutral': '#59C8FF',
					"neutral-content": "#EFEFEF",
					"base-100": "#2B2B2B",
					"base-200": "#2B2B2B",
					"base-300": "#2B2B2B",
					"base-content": "#EFEFEF",
				},
				light: {
					...require("daisyui/src/theming/themes")['light'],
					'primary': '#005AAD',
					'seconday': '#CA1D1D',
					'accent': '#0E1337',
					'neutral': '#59C8FF',
					"neutral-content": "#2B2B2B",
					"base-100": "#EFEFEF",
					"base-200": "#EFEFEF",
					"base-300": "#EFEFEF",
					"base-content": "#2B2B2B",
				},
			}
		]
	}
}
