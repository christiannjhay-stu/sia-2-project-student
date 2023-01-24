/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-blue": "#084784",
				"theme-light-blue": "#4E7FAE",
				"theme-red": "#DB092B",
				gainsboro: "#D9D9D9",
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
				"75rem": "75rem",
				"95%": "95%",
				"70%": "70%",
				"30%": "30%",
			},
		},
	},
	plugins: [],
};
