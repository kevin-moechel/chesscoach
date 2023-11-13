<script lang="ts">
	import type { TrainerProfile } from '../../../types/trainer/trainer-profile';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let trainerProfile: TrainerProfile;
</script>

<div class="flex justify-normal items-start">
	<div class="font-bold py-4">I'm proud to be a</div>
	<div class="px-8">
		<div>
			<RadioGroup>
				<RadioItem bind:group={trainerProfile.fideTitle} name="CM" value={'CM'}>CM</RadioItem>
				<RadioItem bind:group={trainerProfile.fideTitle} name="FM" value={'FM'}>FM</RadioItem>
				<RadioItem bind:group={trainerProfile.fideTitle} name="IM" value={'IM'}>IM</RadioItem>
				<RadioItem bind:group={trainerProfile.fideTitle} name="GM" value={'GM'}>GM</RadioItem>
			</RadioGroup>
		</div>
		<div>
			<RadioGroup>
				<RadioItem bind:group={trainerProfile.fideTitle} name="WCM" value={'WCM'}>WCM</RadioItem>
				<RadioItem bind:group={trainerProfile.fideTitle} name="WFM" value={'WFM'}>WFM</RadioItem>
				<RadioItem bind:group={trainerProfile.fideTitle} name="WIM" value={'WIM'}>WIM</RadioItem>
				<RadioItem bind:group={trainerProfile.fideTitle} name="WGM" value={'WGM'}>WGM</RadioItem>
			</RadioGroup>
		</div>
		<div>
			<RadioGroup>
				<RadioItem bind:group={trainerProfile.fideTitle} name="non-titled" value={''}
					>Non-Titled Player</RadioItem
				>
			</RadioGroup>
		</div>
	</div>
</div>
