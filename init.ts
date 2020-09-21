import globby from "globby";
import pify from "pify";
import path from "path";
import fs from "fs";

const writeFile = pify(fs.writeFile);

function makeAlias(dir: string, names: string[], atomic?: boolean): Record<string, string> {
	return names.reduce(
		(previousValue, name, atomic) => ({
			...previousValue,
			[`@evernest/${name}`]: [`./${atomic ? "atomic-design/" : ""}${dir}/${name}/src`],
		}),
		{}
	);
}

function getLast<T = unknown>(arr: T[]): T {
	return arr.reverse()[0];
}

function getLastDir(pathName: string): string {
	return getLast<string>(path.parse(pathName).dir.split("/"));
}

async function getNames() {
	const atoms = (await globby("./atomic-design/atoms/*/package.json")).map(item =>
		getLastDir(item)
	);
	const ions = (await globby("./atomic-design/ions/*/package.json")).map(item =>
		getLastDir(item)
	);
	const layout = (await globby("./layout/*/package.json")).map(item => getLastDir(item));
	const molecules = (await globby("./atomic-design/molecules/*/package.json")).map(item =>
		getLastDir(item)
	);
	const organisms = (await globby("./atomic-design/organisms/*/package.json")).map(item =>
		getLastDir(item)
	);
	const utils = (await globby("./utils/*/package.json")).map(item => getLastDir(item));
	return { atoms, ions, layout, molecules, organisms, utils };
}

getNames().then(async names => {
	await writeFile(path.resolve(__dirname, "package-names.json"), JSON.stringify(names, null, 4));
	console.log("Generated package names as JSON");
	const tsconfig = require("./tsconfig.json");
	await writeFile(
		path.resolve(__dirname, "tsconfig.json"),
		JSON.stringify(
			{
				...tsconfig,
				compilerOptions: {
					...tsconfig.compilerOptions,
					paths: {
						...makeAlias("utils", names.utils),
						...makeAlias("ions", names.ions, true),
						...makeAlias("atoms", names.atoms, true),
						...makeAlias("molecules", names.molecules, true),
						...makeAlias("organisms", names.organisms, true),
						...makeAlias("layout", names.layout),
					},
				},
			},
			null,
			4
		)
	);
	console.log("Added package aliases to tsconfig");
});
