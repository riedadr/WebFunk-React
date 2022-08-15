/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
      colors: {
        bayerisch: "#008dc9"
      }
    },
	},
	plugins: [],
};
