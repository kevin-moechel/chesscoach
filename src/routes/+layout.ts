import type { RequestEvent } from '@sveltejs/kit';
import { loadTranslations } from '../lib/translations/translations';

export const load = async (page: RequestEvent) => {
	const pathname = page.url.pathname;
	const initLocale = 'en';
	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return {};
};
