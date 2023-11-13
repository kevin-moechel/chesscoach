<script lang="ts">
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';

	export let trainerProfile: TrainerProfile;
	export let baseInformationAvailable: boolean;

	function checkName() {
		if (trainerProfile.name.length > 0) {
			baseInformationAvailable = true;
		} else {
			baseInformationAvailable = false;
		}
	}
</script>

<input
	class="input variant-form-material max-w-sm"
	type="text"
	placeholder="My name is.."
	required
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
