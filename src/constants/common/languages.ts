import { type ILanguage } from '@/types/common/language';

export const LANGUAGES: readonly ILanguage[] = [
	{
		code: 'en',
		label: 'EN',
		languages: 'English',
		country: 'United States',
	},
	{
		code: 'vi',
		label: 'VI',
		languages: 'Vietnamese',
		country: 'Vietnam',
	},
];

export type TLanguageCode = (typeof LANGUAGES)[number]['code'];
