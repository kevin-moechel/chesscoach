import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		// Wizardry to make onMount and onDestroy work in tests (see: https://github.com/vitest-dev/vitest/issues/2834)
		alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }],
		// the next two lines magically fix multiple issues running vite tests.. :(
		globals: true,
		environment: 'jsdom'
	}
});
