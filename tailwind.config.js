/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

module.exports = {
	purge: ["./pages/**/*.js", "./components/**/*.js"],
	content: [],
	theme: {
		extend: {
			borderWidth: px0_10,
			fontSize: px0_100,
			lineHeight: px0_100,
			minWidth: px0_200,
			minHeight: px0_200,
			spacing: px0_200,
			width: px0_2000,
			height: px0_2000,
			padding: px0_200,
			margin: px0_200,
			borderRadius: px0_200,
			left: px0_1000,
			top: px0_1000,
			right: px0_1000,
			bottom: px0_1000,
		},
	},
	variants: { extend: {} },
	plugins: [],
};
