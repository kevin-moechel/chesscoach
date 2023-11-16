import i18n from 'sveltekit-i18n';

export const DEFAULT_LANGUAGE = 'en-EN';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'en-EN',
			key: 'common',
			loader: async () => (await import('./en-EN.json')).default
		},
		{
			locale: 'de-DE',
			key: 'common',
			loader: async () => (await import('./de-DE.json')).default
		}
	]
};

export function isLanguageSupported(language: string) {
	return config.loaders.some((loader) => loader.locale === language);
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
