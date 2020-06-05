module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
	plugins: ["@babel/plugin-transform-runtime"],
	env: {
		test: {
			plugins: ["@babel/plugin-transform-modules-commonjs"],
		},
	},
};