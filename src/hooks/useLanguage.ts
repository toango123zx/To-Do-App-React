import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router';

import { defaultLanguage, supportedLanguages, type TLanguage } from '@/lib/i18n';

interface IUseLanguageReturn {
	/** The currently active language (always a valid TLanguage) */
	currentLanguage: TLanguage;
	/** List of supported languages */
	languages: TLanguage[];
	/**
	 * Switch language by navigating to a new URL.
	 * Example: at /en/dashboard → switchLanguage('vi') → /vi/dashboard
	 */
	switchLanguage: (lang: TLanguage) => void;
}

/**
 * Hook to read the current language and switch languages.
 *
 * DO NOT call i18n.changeLanguage() directly from the UI — use this hook.
 * Reason: switchLanguage() navigates to a new URL first; LanguageLayout will
 * automatically call i18n.changeLanguage() when the router re-renders.
 * This ensures the URL and i18n stay in sync (single source of truth = URL).
 */
export const useLanguage = (): IUseLanguageReturn => {
	const { i18n } = useTranslation();
	const { lang } = useParams<{ lang: string }>();
	const navigate = useNavigate();
	const location = useLocation();

	const resolvedLang = lang?.toLowerCase() ?? i18n.resolvedLanguage ?? defaultLanguage;
	const currentLanguage: TLanguage = supportedLanguages.has(resolvedLang as TLanguage)
		? (resolvedLang as TLanguage)
		: defaultLanguage;

	const switchLanguage = useCallback(
		(newLang: TLanguage): void => {
			if (!supportedLanguages.has(newLang) || newLang === currentLanguage) return;

			// Keep the path after /:lang when switching languages
			// Example: /en/dashboard/settings → /vi/dashboard/settings

			const pathWithoutLang = location.pathname.split('/').slice(2).join('/');

			const newPath = `/${newLang}${pathWithoutLang ? `/${pathWithoutLang}` : ''}${location.search}${location.hash}`;

			const navigationResult = navigate(newPath);

			if (navigationResult instanceof Promise) {
				navigationResult.catch((error): void => {
					console.error(`Failed to switch language to ${newLang}`, error);
				});
			}
		},
		[currentLanguage, location.hash, location.pathname, location.search, navigate],
	);

	return {
		currentLanguage,
		languages: Array.from(supportedLanguages),
		switchLanguage,
	};
};
