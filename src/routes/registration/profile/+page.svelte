<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import TrainingLocation from '../../../components/registration/profile/training-location.svelte';
	import FideTitleSelector from '../../../components/registration/profile/fide-title-selector.svelte';
	import AgeGroups from '../../../components/registration/profile/age-groups.svelte';
	import ProfilePreview from '../../../components/registration/profile/profile-preview.svelte';
	import TrainerProfiles from '../../../components/registration/profile/trainer-profiles.svelte';
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';

	let trainerProfile = {} as TrainerProfile;
	let ageGroupSelected = false;
</script>

<div class="container mx-auto p-8 space-y-8">
	<Stepper>
		<Step>
			<svelte:fragment slot="header">Tell us about yourself</svelte:fragment>
			<TrainerProfiles bind:trainerProfile />
		</Step>
		<Step locked={!ageGroupSelected}>
			<svelte:fragment slot="header">Up to what rating do you want to train others?</svelte:fragment
			>
			<AgeGroups bind:trainerProfile bind:ageGroupSelected />
		</Step>
		<Step>
			<svelte:fragment slot="header">Your accomplishments</svelte:fragment>
			<FideTitleSelector bind:trainerProfile />
		</Step>
		<Step>
			<svelte:fragment slot="header">What age groups do you want to work with?</svelte:fragment>
			<AgeGroups bind:trainerProfile />
		</Step>
		<Step>
			<svelte:fragment slot="header">About where you can train</svelte:fragment>
			<TrainingLocation bind:trainerProfile />
		</Step>
		<Step>
			<svelte:fragment slot="header">Profile Preview</svelte:fragment>
			<ProfilePreview bind:trainerProfile />
		</Step>
	</Stepper>
</div>
