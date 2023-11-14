<script lang="ts">
	import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';

	export let trainerProfile: TrainerProfile;
	export let baseInformationAvailable: boolean;

	export function getBaseInformationAvailable() {
		return baseInformationAvailable;
	}

	function checkName() {
		if (trainerProfile.name.length > 0) {
			baseInformationAvailable = true;
		} else {
			baseInformationAvailable = false;
		}
	}
</script>

<label class="label max-w-sm"
	><span class="hidden">Your name</span><input
		class="input variant-form-material max-w-sm"
		type="text"
		placeholder="My name is.."
		bind:value={trainerProfile.name}
		on:input={() => checkName()}
	/></label
>

<label class="label max-w-sm" for="fideRating"
	><span class="hidden">Your Fide Rating</span><input
		bind:value={trainerProfile.fideRating}
		class="input variant-form-material max-w-sm"
		type="text"
		placeholder="My FIDE rating is.."
		id="fideRating"
	/></label
>

<label class="label max-w-sm"
	><span class="hidden">Chess.com profile</span><input
		bind:value={trainerProfile.chessComUsername}
		class="input variant-form-material max-w-sm"
		type="text"
		placeholder="My chess.com username is.."
	/></label
>

<label class="label max-w-sm"
	><span class="hidden">lichess.org profile</span><input
		bind:value={trainerProfile.lichessOrgUsername}
		class="input variant-form-material max-w-sm"
		type="text"
		placeholder="My chess.com username is.."
	/></label
>
