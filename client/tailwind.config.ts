import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#04A7CC',
				white: '#ffffff',
			},
		},
		colors: {
			background: '#F8F8F8',
		},
	},
	plugins: [require('tailwindcss/nesting')],
}
export default config
