/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	bail: 1,
	verbose: true,
	testEnvironment: "node",
	coveragePathIgnorePatterns: ["/node_modules/"],
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
	},
	transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
	modulePaths: ["<rootDir>"],
}
