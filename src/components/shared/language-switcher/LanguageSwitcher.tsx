import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LANGUAGES } from '@/constants';
import { useLanguage } from '@/hooks/useLanguage';
import { type ILanguage, type TLanguageCode } from '@/types';

export const LanguageSelect = (): JSX.Element => {
	const { switchLanguage, currentLanguage } = useLanguage();
	const { t } = useTranslation('common');

	const handleLanguageChange = (language: string): void => {
		const languageCode = language as TLanguageCode;
		if (languageCode === currentLanguage) return;
		switchLanguage(languageCode);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full bg-surface-2"
					aria-label={t('Select Language')}
				>
					<Globe />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-fit min-w-fit bg-bg border-border shadow-sm">
				<DropdownMenuRadioGroup
					value={currentLanguage}
					onValueChange={handleLanguageChange}
				>
					{LANGUAGES.map(
						(language: ILanguage): JSX.Element => (
							<DropdownMenuRadioItem
								key={language.code}
								value={language.code}
								className="cursor-pointer"
							>
								{language.code}
							</DropdownMenuRadioItem>
						),
					)}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
