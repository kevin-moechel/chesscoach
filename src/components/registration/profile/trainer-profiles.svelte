<script lang="ts">
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';

	export let trainerProfile: TrainerProfile;

	function checkName() {
		return true;
	}
</script>

<input
	class="input variant-form-material max-w-sm"
	type="text"
	placeholder="My name is.."
	bind:value={trainerProfile.name}
	on:blur={() => checkName()}
/>
<br />
<input class="input variant-form-material max-w-sm" type="text" placeholder="My FIDE rating is.." />
<br />
<input
	class="input variant-form-material max-w-sm"
	type="text"
	placeholder="My chess.com username is.."
	required
/>
<br />
<input
	class="input variant-form-material max-w-sm"
	type="text"
	placeholder="My lichess.org username is.."
/>
