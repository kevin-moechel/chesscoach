<script lang="ts">
	import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';

	export let trainerProfile: TrainerProfile;
	export let locationComplete: boolean;

	export function isLocationComplete() {
		return locationComplete;
	}

	function locationChanged() {
		locationComplete = false;
		let hasLocationPreference = trainerProfile.locationPreferences.length > 0;
		let hasDistance = trainerProfile.travelTime > 0;
		if (hasLocationPreference) {
			let hasPhysicalLocation =
				trainerProfile.location != null && trainerProfile.location.length > 0;

			if (trainerProfile.locationPreferences.includes('remote')) {
				locationComplete = true;
			}

			if (trainerProfile.locationPreferences.includes('myLocation')) {
				locationComplete = hasPhysicalLocation;
			}

			if (trainerProfile.locationPreferences.includes('yourLocation')) {
				locationComplete = hasPhysicalLocation && hasDistance;
			}
		}
		if (hasDistance) {
			trainerProfile.travelTime = Number(trainerProfile.travelTime);
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
					value="yourLocation"
					bind:group={trainerProfile.locationPreferences}
					on:change={() => locationChanged()}
				/>
				<p>In person at your location</p>
			</label>
			<label class="flex items-center space-x-2">
				<input
					class="checkbox"
					type="checkbox"
					value="myLocation"
					bind:group={trainerProfile.locationPreferences}
					on:change={() => locationChanged()}
				/>
				<p>In person at my location</p>
			</label>
		</div>
	</div>
</div>
<div class="flex justify-normal items-center">
	<div class="font-bold w-1/4 break-words">
		<label for="trainerLocation">I'm located here</label>
	</div>
	<div class="px-8 w-1/2">
		<input
			class="input variant-form-material"
			type="text"
			placeholder="My city.."
			id="trainerLocation"
			bind:value={trainerProfile.location}
			on:input={() => locationChanged()}
		/>
	</div>
</div>
<div class="flex justify-normal items-center">
	<div class="font-bold w-1/4 break-words">
		<label for="travelDistance">How long I'd drive to you</label>
	</div>
	<div class="px-8">
		<input
			class="input variant-form-material"
			type="text"
			placeholder="30"
			id="travelDistance"
			bind:value={trainerProfile.travelTime}
			on:input={() => locationChanged()}
		/>
	</div>
</div>
