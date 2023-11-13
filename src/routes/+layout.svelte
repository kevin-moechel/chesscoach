<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			(title)
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<div id="sidebar-left" class="hidden lg:block bg-surface-500/5 w-56 p-4">
			<nav class="list-nav">
				<ul>
					<li>
						<LightSwitch />
					</li>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/registration/profile">Create profile</a></li>
				</ul>
			</nav>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
