import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';

import { en, type TEnNamespaceLanguage, vi } from '@/languages';

export const resources = {
	en,
	vi,
} as const;

export type TLanguage = keyof typeof resources;
export const defaultLanguage: TLanguage = 'en';
export const defaultNamespace: TEnNamespaceLanguage = 'common';

i18next.use(initReactI18next).init({
	lng: defaultLanguage,
	ns: Object.keys(en),
	resources,
	fallbackLng: defaultLanguage,
	defaultNS: defaultNamespace,
});
