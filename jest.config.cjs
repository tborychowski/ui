module.exports = {
	rootDir: '.',
	transform: {
		'^.+\\.svelte$': 'svelte-jester',
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svg$': './tests/svgTransform.cjs',
	},
	moduleFileExtensions: ['js', 'svelte'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};