import { create } from "@storybook/theming/create";

export default create({
	base: "light",

	colorPrimary: "#000",
	colorSecondary: "#333",

	// UI
	appBg: "#fff",
	appContentBg: "#fff",
	appBorderColor: "#000",
	appBorderRadius: 3,

	// Typography
	fontBase: "sans-serif",
	fontCode: "monospace",

	// Text colors
	textColor: "#000",
	textInverseColor: "#fff",

	// Toolbar default and active colors
	barTextColor: "#fff",
	barSelectedColor: "#fff",
	barBg: "#000",

	// Form colors
	inputBg: "#fff",
	inputBorder: "#ddd",
	inputTextColor: "#000",
	inputBorderRadius: 3,

	brandTitle: "Evernest",
	brandUrl: "https://github.com/everdevs/rect-components",
	brandImage:
		"https://raw.githubusercontent.com/everdevs/frontend/master/public/images/evernest-logo-tagline-black.png?token=AAIYLLV7P5H73GP7PNOUDIC64DT24",
});
