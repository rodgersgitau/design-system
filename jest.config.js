const path = require("path");
const packages = require("./package-names.json");

function makeAlias(dir, names, atomic = false) {
	return names.reduce(
		(previousValue, name) => ({
			...previousValue,
			[`^@evernest/${name}`]: path.resolve(
				__dirname,
				atomic ? "atomic-design" : "",
				dir,
				name,
				"src"
			),
		}),
		{}
	);
}

module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["/dist/", ".tpl"],
	verbose: false,
	setupFilesAfterEnv: ["jest-enzyme"],
	testEnvironment: "enzyme",
	moduleNameMapper: {
		...makeAlias("utils", packages.utils),
		...makeAlias("ions", packages.ions, true),
		...makeAlias("atoms", packages.atoms, true),
		...makeAlias("molecules", packages.molecules, true),
		...makeAlias("organisms", packages.organisms, true),
		...makeAlias("templates", packages.templates, true),
	},
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)",
	],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			tsConfig: "./tsconfig.json",
		},
	},
};
