const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
                black: {
                    DEFAULT: colors.black,
                    light: colors.gray[800],
                    lighter: colors.gray[500],
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
