<script lang="ts">
	import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';
	import TrainerCard from '../../../trainer/trainer-card.svelte';

	export let trainerProfile: TrainerProfile;
</script>

<TrainerCard bind:trainerProfile />
