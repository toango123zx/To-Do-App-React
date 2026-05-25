import { type JSX, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet, useLocation, useParams } from 'react-router';

import { defaultLanguage, supportedLanguages, type TLanguage } from '@/lib/i18n';

/**
 * LanguageLayout — layout wrapper for a route tree prefixed with `/:lang`.
 *
 * Responsibilities:
 *  1. Validate the `:lang` URL parameter.
 *  2. If invalid, perform a client-side redirect to `/:defaultLanguage`
 *     using history replacement to avoid back-button loops.
 *  3. If valid, synchronize i18n with the language indicated in the URL.
 *  4. Render `<Outlet />` for child routes.
 *
 * Why not parse the URL inside `i18n.ts`?
 *  - i18n initialization runs once (module singleton) and the router params
 *    are not available at that time.
 *  - Parsing the URL in `i18n.ts` is brittle and hard to test.
 *  - `LanguageLayout` runs within the React tree and has access to router
 *    context, making it the appropriate place to validate and sync language.
 */
export const LanguageLayout = (): JSX.Element => {
	const { lang } = useParams<{ lang: string }>();
	const location = useLocation();

	const normalizedLang = lang?.toLowerCase() as TLanguage | undefined;
	const isValidLang = !!normalizedLang && supportedLanguages.has(normalizedLang);

	// Guard: ngôn ngữ không hợp lệ → redirect ngay, không render children
	if (!isValidLang) {
		const redirectPath = location.pathname.replace(
			/^\/[^/]+(?=\/|$)/,
			`/${defaultLanguage}`,
		);
		return (
			<Navigate to={`${redirectPath}${location.search}${location.hash}`} replace />
		);
	}

	return <LanguageSyncer lang={normalizedLang} />;
};

// ---------------------------------------------------------------------------
// Split into a dedicated component to satisfy Hooks rules:
// `useEffect` must run only after `lang` has been validated.
// ---------------------------------------------------------------------------
interface ILanguageSyncerProps {
	lang: TLanguage;
}

const LanguageSyncer = ({ lang }: ILanguageSyncerProps): JSX.Element => {
	const { i18n } = useTranslation();

	useEffect((): void => {
		const currentLang = (i18n.resolvedLanguage ?? i18n.language).toLowerCase();
		if (currentLang === lang) return;

		void i18n.changeLanguage(lang);
	}, [i18n, lang]);

	return <Outlet />;
};
