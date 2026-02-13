import common from './common.json';
import loginPage from './loginPage.json';

export const vi = {
	common,
	loginPage,
};

export type TViNamespaceLanguage = keyof typeof vi;
