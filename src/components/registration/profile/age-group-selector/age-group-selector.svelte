<script lang="ts">
	import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';

	export let trainerProfile: TrainerProfile;
	export let ageGroupSelected = false;

	function ageGroupChanged() {
		ageGroupSelected = trainerProfile.ageGroups.length > 0;
	}
</script>

<label class="flex items-center space-x-2">
	<input
		class="checkbox"
		type="checkbox"
		value="children"
		id="group.children"
		bind:group={trainerProfile.ageGroups}
		on:change={() => ageGroupChanged()}
	/>
	<p>Children</p>
</label>
<label class="flex items-center space-x-2">
	<input
		class="checkbox"
		type="checkbox"
		value="teenager"
		id="group.teenager"
		bind:group={trainerProfile.ageGroups}
		on:change={() => ageGroupChanged()}
	/>
	<p>Teenagers</p>
</label>
<label class="flex items-center space-x-2">
	<input
		class="checkbox"
		type="checkbox"
		value="adults"
		id="group.adults"
		bind:group={trainerProfile.ageGroups}
		on:change={() => ageGroupChanged()}
	/>
	<p>Adults</p>
</label>
