/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				"70%": "70%",
				"30%": "30%",
			},
			screens: {
				desktop: "1366px",
				tablet: "1024px",
			},
		},
	},
	plugins: [],
};
