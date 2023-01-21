/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-blue": "#084784",
				"theme-red": "#DB092B",
			},
			height: {
				"95%": "95%",
				"800px": "800px",
			},
			margin: {
				"10vh": "10vh",
			},
			screens: {
				desktop: "1366px",
				tablet: "1024px",
			},
			width: {
				"95%": "95%",
				"70%": "70%",
				"30%": "30%",
			},
		},
	},
	plugins: [],
};
