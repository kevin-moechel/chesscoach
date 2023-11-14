<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import posthog from 'posthog-js';
	import { onMount } from 'svelte';
	import FideTitleSelector from '../../../components/registration/profile/fide-title-selector/fide-title-selector.svelte';
	import ProfilePreview from '../../../components/registration/profile/profile-preview/profile-preview.svelte';
	import EloRangeSlider from '../../../components/registration/profile/elo-range-slider/elo-range-slider.svelte';
	import AgeGroupSelector from '../../../components/registration/profile/age-group-selector/age-group-selector.svelte';
	import TrainingLocationSelector from '../../../components/registration/profile/training-location-selector/training-location-selector.svelte';
	import TrainerOnlineProfilesInput from '../../../components/registration/profile/trainer-online-profiles-input/trainer-online-profiles-input.svelte';
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';

	let trainerProfile = {} as TrainerProfile;

	let baseInformationAvailable = false;
	let ageGroupSelected = false;
	let locationComplete = false;

	onMount(() => {
		posthog.capture('registration-started');
	});

	function stepperNext(e: CustomEvent) {
		posthog.capture('registration-next-step', {
			currentStep: e.detail.step,
			nextStep: e.detail.step + 1
		});
	}

	function stepperComplete() {
		posthog.capture('registration-completed');
	}
</script>

<div class="container mx-auto p-8 space-y-8">
	<Stepper on:next={(e) => stepperNext(e)} on:complete={() => stepperComplete()}>
		<Step locked={!baseInformationAvailable}>
			<svelte:fragment slot="header">Tell us about yourself</svelte:fragment>
			<TrainerOnlineProfilesInput bind:trainerProfile bind:baseInformationAvailable />
		</Step>
		<Step>
			<svelte:fragment slot="header">Up to what rating do you want to train others?</svelte:fragment
			>
			<EloRangeSlider bind:trainerProfile />
		</Step>
		<Step locked={!trainerProfile.fideTitle}>
			<svelte:fragment slot="header">Your accomplishments</svelte:fragment>
			<FideTitleSelector bind:trainerProfile />
		</Step>
		<Step locked={!ageGroupSelected}>
			<svelte:fragment slot="header">What age groups do you want to work with?</svelte:fragment>
			<AgeGroupSelector bind:trainerProfile bind:ageGroupSelected />
		</Step>
		<Step locked={!locationComplete}>
			<svelte:fragment slot="header">About where you can train</svelte:fragment>
			<TrainingLocationSelector bind:trainerProfile bind:locationComplete />
		</Step>
		<Step>
			<svelte:fragment slot="header">Profile Preview</svelte:fragment>
			<ProfilePreview bind:trainerProfile />
		</Step>
	</Stepper>
</div>
