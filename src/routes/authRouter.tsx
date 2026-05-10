import { type RouteObject } from 'react-router';

import { LoginPage } from '@/pages';

export const authRouter: RouteObject[] = [
	{
		path: 'auth',
		children: [
			{
				path: 'login',
				Component: LoginPage,
			},
		],
	},
];
