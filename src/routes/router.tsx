import { createBrowserRouter, Navigate } from 'react-router';

import { App } from '@/App';
import { LanguageLayout } from '@/layouts';
import { defaultLanguage } from '@/lib/i18n';

import { authRouter } from './authRouter';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to={`/${defaultLanguage}`} replace />,
	},
	{
		path: '*',
		element: <Navigate to={`/${defaultLanguage}`} replace />,
	},
	{
		path: '/:lang',
		Component: LanguageLayout,
		children: [
			{
				path: '',
				Component: App,
			},
			...authRouter,
		],
	},
]);
