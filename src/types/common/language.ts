import { type TLanguage } from '@/lib/i18n/i18n';

export interface ILanguage {
	code: TLanguage;
	label: string;
	languages: string;
	country: string;
}

export type TLanguageCode = TLanguage;
