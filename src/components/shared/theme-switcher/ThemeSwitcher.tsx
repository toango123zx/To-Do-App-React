import { type JSX, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { THEMES } from '@/constants';
import { type ITheme } from '@/types';
import { cn } from '@/utils';

const DEFAULT_THEME = THEMES[0];
const STORAGE_KEY = 'theme';

const getInitialTheme = (): ITheme => {
	if (typeof window === 'undefined') return DEFAULT_THEME;
	const stored = localStorage.getItem(STORAGE_KEY);
	const found = THEMES.find((theme: ITheme): boolean => theme.code === stored);
	if (found) return found;
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return (
			THEMES.find((theme: ITheme): boolean => theme.code === 'dark') ??
			DEFAULT_THEME
		);
	}
	return DEFAULT_THEME;
};

export const ThemeSwitcher = (): JSX.Element => {
	const { t } = useTranslation('common');
	const [theme, setTheme] = useState<ITheme>(getInitialTheme);

	const toggleTheme = (value: string): void => {
		const selectedTheme = THEMES.find(
			(THEME: ITheme): boolean => THEME.code === value,
		);
		if (!selectedTheme) {
			return;
		}
		setTheme(selectedTheme);
	};

	useEffect((): void => {
		localStorage.setItem(STORAGE_KEY, theme.code);
		document.documentElement.setAttribute('data-theme', theme.class);
	}, [theme.code, theme.class]);

	const CurrentIcon = theme.icon;

	return (
		<div className="flex justify-end mb-4">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="rounded-full bg-surface-2"
						aria-label={t('Toggle theme')}
					>
						<CurrentIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-fit min-w-auto bg-bg border-border shadow-sm">
					<DropdownMenuRadioGroup
						value={theme.code}
						onValueChange={toggleTheme}
					>
						{THEMES.map((theme: ITheme): JSX.Element => {
							const Icon = theme.icon;

							return (
								<DropdownMenuRadioItem
									key={theme.code}
									value={theme.code}
									className={cn(
										'flex items-center gap-2 cursor-pointer',
									)}
								>
									<Icon size={16} />
									<span>{theme.label}</span>
								</DropdownMenuRadioItem>
							);
						})}
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
