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
				...globals.node,
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
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
				},
				node: true,
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react-hooks/exhaustive-deps': 'error',
			'react/jsx-key': 'error',
			'react/jsx-props-no-spreading': 'warn',

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

			// '@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					allowExpressions: false,
					allowTypedFunctionExpressions: false,
					allowHigherOrderFunctions: false,
				},
			],

			// '@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'error',

			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-misused-promises': 'error',

			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',

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
			// '@typescript-eslint/no-floating-promises': 'off',
			// '@typescript-eslint/no-misused-promises': 'off',
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
			'import/no-restricted-paths': [
				'error',
				{
					zones: [
						{
							target: './src/components',
							from: './src/services',
							message: 'UI (components) must not import services directly.',
						},
						{
							target: './src/pages',
							from: './src/services',
							message: 'UI (pages) must not import services directly.',
						},
					],
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
			'@typescript-eslint/no-implied-eval': 'error',
			'no-return-await': 'warn',
			'@typescript-eslint/require-await': 'warn',
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
			'import/no-cycle': 'error',
			'import/no-default-export': 'warn',
			'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

			'no-useless-rename': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-concat': 'error',
			'@typescript-eslint/only-throw-error': 'error',
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
			'no-restricted-syntax': [
				'error',
				{
					selector: 'TSEnumDeclaration',
					message: 'Use union types instead of enums.',
				},
			],
		},
	},
	{
		files: ['src/components/ui/**/*.{ts,tsx}'],
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react-refresh/only-export-components': 'off',
		},
	},
	{
		files: ['vite.config.ts', 'eslint.config.ts', 'tailwind.config.js'],
		rules: {
			'import/no-default-export': 'off',
			'@typescript-eslint/no-var-requires': 'off',
		},
	},
	{
		files: ['postcss.config.js', 'tailwind.config.js'],
		languageOptions: {
			parserOptions: {
				projectService: false,
			},
		},
		rules: {
			'import/no-default-export': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/prefer-optional-chain': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/no-implied-eval': 'off',
			'@typescript-eslint/only-throw-error': 'off',
		},
	},

	eslintConfigPrettier,
);
