import type { RequestEvent } from '@sveltejs/kit';
import { DEFAULT_LANGUAGE, loadTranslations } from '../lib/translations/translations';

export const load = async (page: RequestEvent) => {
	let languageToLoad = DEFAULT_LANGUAGE;

	await loadTranslations(languageToLoad);
	return {};
};
