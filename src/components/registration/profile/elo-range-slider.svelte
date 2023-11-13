<script lang="ts">
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	export let trainerProfile: TrainerProfile;
</script>

<RangeSlider
	name="range-slider"
	bind:value={trainerProfile.maxTrainingRating}
	min={0}
	max={2900}
	step={100}
	label="Rating range"
	class="max-w-lg"
>
	<div class="flex justify-between items-center">
		<div class="font-bold">Up to a rating of {trainerProfile.maxTrainingRating}</div>
	</div>
</RangeSlider>
