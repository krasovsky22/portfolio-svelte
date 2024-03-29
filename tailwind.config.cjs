const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				whiteMainBg: 'var(--white-color-main-bg)',
				darkMainBg: 'var(--black-color-main-bg)',
				black: {
					DEFAULT: colors.black,
					light: colors.gray[800],
					lighter: colors.gray[500]
				},
				primary: {
					DEFAULT: colors.blue[500],
					light: colors.blue[300]
				}
			}
		}
	},
	plugins: []
};
