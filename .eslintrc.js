module.exports = {
	'ignorePatterns': ['./*.js'],
	'env': {
		'browser': true,
		'es2021': true,
    'node':true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
    'prettier'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
    'prettier'
	],
	'rules': {
    'prettier/prettier': 2,
    'react/react-in-jsx-scope':0,
    '@typescript-eslint/no-var-requires': 0,
	}
}
