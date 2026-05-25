import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';

import { en, type TEnNamespaceLanguage, vi } from '@/languages';

// ---------------------------------------------------------------------------
// Resource map — add new languages by adding an entry here
// ---------------------------------------------------------------------------
export const resources = {
	en,
	vi,
} as const;

export type TLanguage = keyof typeof resources;
export type TNamespace = TEnNamespaceLanguage;

export const defaultLanguage: TLanguage = 'en';
export const defaultNamespace: TNamespace = 'common';

/** Set of supported language codes — used by `LanguageLayout` for validation */
export const supportedLanguages = new Set<TLanguage>(
	Object.keys(resources) as TLanguage[],
);

// ---------------------------------------------------------------------------
// i18next initialization — DO NOT read the URL here.
// The initial language is always `defaultLanguage`. `LanguageLayout` will call
// `i18n.changeLanguage()` once the router has parsed the `:lang` URL param.
// ---------------------------------------------------------------------------
i18next
	.use(initReactI18next)
	.init({
		lng: defaultLanguage,
		ns: Object.keys(en),
		resources,
		fallbackLng: defaultLanguage,
		defaultNS: defaultNamespace,
		interpolation: {
			escapeValue: false, // React already handles XSS escaping
		},
	})
	.catch((error): void => {
		console.error('[i18n] Failed to initialize:', error);
	});
