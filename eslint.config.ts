import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['dist', 'node_modules', 'pnpm-lock.yaml'],
	},

	js.configs.recommended,
	...tseslint.configs.recommended,

	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		languageOptions: {
			ecmaVersion: 2024,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.es2024,
			},
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier,
			'unused-imports': unusedImports,
			'simple-import-sort': simpleImportSort,
			import: importPlugin,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,

			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/self-closing-comp': 'error',
			'react/jsx-curly-brace-presence': [
				'error',
				{ props: 'never', children: 'never' },
			],
			'react/jsx-boolean-value': ['error', 'never'],

			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
			],
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
			'@typescript-eslint/no-inferrable-types': 'warn',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'warn',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/ban-ts-comment': [
				'error',
				{
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': true,
					'ts-nocheck': true,
					'ts-check': false,
					minimumDescriptionLength: 10,
				},
			],
			'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
			'@typescript-eslint/consistent-type-definitions': ['off'],
			'@typescript-eslint/naming-convention': [
				'warn',
				{
					selector: 'interface',
					format: ['PascalCase'],
				},
				{
					selector: 'typeAlias',
					format: ['PascalCase'],
				},
				{
					selector: 'enum',
					format: ['PascalCase'],
				},
				{
					selector: 'enumMember',
					format: ['UPPER_CASE', 'PascalCase'],
				},
			],

			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],

			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^\\u0000'],
						['^react', '^react-dom'],
						['^@?\\w'],
						['^@/'],
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						['^.+\\.s?css$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',

			'prettier/prettier': 'error',

			'no-console': ['warn', { allow: ['warn', 'error'] }],

			'no-debugger': 'error',
			'prefer-const': 'error',
			'no-var': 'error',
			eqeqeq: ['error', 'always', { null: 'ignore' }],

			'no-alert': 'warn',
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-return-await': 'warn',
			'require-await': 'warn',
			'no-await-in-loop': 'warn',
			'no-promise-executor-return': 'error',
			'prefer-promise-reject-errors': 'error',
			curly: ['error', 'all'],
			'default-case-last': 'error',
			'no-else-return': 'warn',
			'no-lonely-if': 'warn',
			'no-unneeded-ternary': 'error',
			'prefer-arrow-callback': 'error',
			'arrow-body-style': ['warn', 'as-needed'],
			'object-shorthand': ['error', 'always'],
			'prefer-template': 'error',
			'prefer-destructuring': [
				'warn',
				{
					array: false,
					object: true,
				},
			],
			'no-nested-ternary': 'warn',
			'no-duplicate-imports': 'off',
			'import/no-duplicates': ['error', { 'prefer-inline': true }],
			'no-useless-rename': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-concat': 'error',
			'no-throw-literal': 'error',
			'prefer-object-spread': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'symbol-description': 'warn',

			'react/no-array-index-key': 'warn',
			'react/no-danger': 'warn',
			'react/no-unstable-nested-components': 'error',
			'react/jsx-no-useless-fragment': 'error',
			'react/jsx-pascal-case': 'error',
			'react/jsx-no-leaked-render': 'warn',
			'react/hook-use-state': 'warn',
			'react/jsx-no-constructed-context-values': 'warn',
			'react/no-object-type-as-default-prop': 'warn',
			'react/jsx-handler-names': [
				'off',
				{
					eventHandlerPrefix: 'handle',
					eventHandlerPropPrefix: 'on',
				},
			],
		},
	},

	eslintConfigPrettier,
);
