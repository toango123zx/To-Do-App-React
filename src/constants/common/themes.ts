import { Moon, Sun } from 'lucide-react';

import { type ITheme } from '@/types';

export const THEMES: readonly ITheme[] = [
	{
		code: 'light',
		label: 'Light',
		class: 'light',
		icon: Sun,
	},
	{
		code: 'dark',
		label: 'Dark',
		class: 'dark',
		icon: Moon,
	},
];
