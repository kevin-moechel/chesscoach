<script lang="ts">
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';

	export let trainerProfile: TrainerProfile;
	export let locationComplete = false;

	function locationChanged() {
		console.log(trainerProfile);

		if (trainerProfile.locationPreferences.length > 0) {
			if (trainerProfile.locationPreferences.includes('myLocation')) {
				if (trainerProfile.location) {
					locationComplete = trainerProfile.location.length > 0;
				}
			} else if (trainerProfile.locationPreferences.includes('yourLocation')) {
				locationComplete = trainerProfile.travelTime > 0;
			} else {
				locationComplete = true;
			}
		}
	}
</script>

<div class="flex justify-normal items-center">
	<div class="font-bold w-1/4 break-words">You can work with me</div>
	<div class="px-8 grow">
		<div class="space-y-2">
			<label class="flex items-center space-x-2">
				<input
					class="checkbox"
					type="checkbox"
					value="remote"
					bind:group={trainerProfile.locationPreferences}
					on:change={() => locationChanged()}
				/>
				<p>Remote</p>
			</label>
			<label class="flex items-center space-x-2">
				<input
					class="checkbox"
					type="checkbox"
					value="myLocation"
					bind:group={trainerProfile.locationPreferences}
					on:change={() => locationChanged()}
				/>
				<p>In person at your location</p>
			</label>
			<label class="flex items-center space-x-2">
				<input
					class="checkbox"
					type="checkbox"
					value="yourLocation"
					bind:group={trainerProfile.locationPreferences}
					on:change={() => locationChanged()}
				/>
				<p>In person at my location</p>
			</label>
		</div>
	</div>
</div>
<div class="flex justify-normal items-center">
	<div class="font-bold w-1/4 break-words">I'm located here</div>
	<div class="px-8 w-1/2">
		<input
			class="input variant-form-material"
			type="text"
			placeholder="My city.."
			bind:value={trainerProfile.location}
			on:change={() => locationChanged()}
		/>
	</div>
</div>
<div class="flex justify-normal items-center">
	<div class="font-bold w-1/4 break-words">I'm can travel up to this many minutes</div>
	<div class="px-8">
		<input
			class="input variant-form-material"
			type="text"
			placeholder="30"
			bind:value={trainerProfile.travelTime}
			on:change={() => locationChanged()}
		/>
	</div>
</div>
