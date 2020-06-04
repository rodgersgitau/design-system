module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	verbose: true,
	setupFilesAfterEnv: ["jest-enzyme"],
	testEnvironment: "enzyme",
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)",
	],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"^.+\\.jsx?$": "babel-jest",
	},
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.json",
		},
	},
};
