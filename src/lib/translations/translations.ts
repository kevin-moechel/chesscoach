import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'en',
			key: 'home',
			routes: ['/'], // you can use regexes as well!
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'de',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./de/home.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
