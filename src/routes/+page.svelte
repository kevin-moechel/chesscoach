<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import { t } from '$lib/translations/translations';
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">{$t('common.title')}</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<Avatar src="https://i.pravatar.cc/" />
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>
