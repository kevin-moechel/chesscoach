import type { RequestEvent } from '@sveltejs/kit';
import {
	DEFAULT_LANGUAGE,
	isLanguageSupported,
	loadTranslations
} from '../lib/translations/translations';

export const load = async (page: RequestEvent) => {
	let languageToLoad = DEFAULT_LANGUAGE;

	const acceptLanguageFull = page.request.headers.get('accept-language');
	if (acceptLanguageFull) {
		const acceptLanguage = acceptLanguageFull.split(',')[0];
		if (isLanguageSupported(acceptLanguage)) {
			languageToLoad = acceptLanguage;
		}
	}

	await loadTranslations(languageToLoad);
	return {};
};
