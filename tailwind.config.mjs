/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: 'Roboto',
			title: 'Rubik',
			body: 'Roboto'
		},
		extend: {},
	},
	plugins: [require( 'daisyui' )],
	daisyui: {
		themes: [
			{
				dark: {
					...require( "daisyui/src/theming/themes" )['dark'],
					'primary': '#005AAD',
					'accent': '#0E1337',
					'error': '#CA1D1D',
					'info': '#59C8FF',
					'warning': 'FFB35A',
					'footer': '#005AAD',
					"neutral-content": "#EFEFEF",
					"base-100": "#2B2B2B",
					"base-200": "#EFEFEF",
					"base-300": "#59C8FF",
					"base-content": "#EFEFEF",
				},
				light: {
					...require( "daisyui/src/theming/themes" )['light'],
					'primary': '#005AAD',
					'accent': '#0E1337',
					'error': '#CA1D1D',
					'info': '#59C8FF',
					'warning': 'FFB35A',
					'footer': '#005AAD',
					"neutral-content": "#2B2B2B",
					"base-100": "#EFEFEF",
					"base-200": "#2B2B2B",
					"base-300": "#4482FA",
					"base-content": "#2B2B2B",
				},
			}
		]
	}
}
