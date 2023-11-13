<script lang="ts">
	import { onMount } from 'svelte';
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	export let trainerProfile: TrainerProfile;
	let maximumTrainingLimit = 0;

	onMount(() => {
		maximumTrainingLimit = Math.ceil(Number(trainerProfile.fideRating) / 100) * 100;
		trainerProfile.maxTrainingRating = Math.ceil(maximumTrainingLimit / 2 / 100) * 100;
	});
</script>

<RangeSlider
	name="range-slider"
	bind:value={trainerProfile.maxTrainingRating}
	min={0}
	max={maximumTrainingLimit}
	step={100}
	label="Rating range"
	class="max-w-lg"
>
	<div class="flex justify-between items-center">
		<div class="font-bold">Up to a rating of {trainerProfile.maxTrainingRating}</div>
	</div>
</RangeSlider>
