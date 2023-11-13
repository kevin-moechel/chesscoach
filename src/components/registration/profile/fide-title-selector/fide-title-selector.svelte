<script lang="ts">
	import { FideTitle } from '../../../../types/trainer/fide-title';
	import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let trainerProfile: TrainerProfile;
</script>

<div class="flex justify-normal items-start">
	<div class="font-bold py-4">I'm proud to be a</div>
	<div class="px-8">
		<div>
			<RadioGroup class="w-full">
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.CM} value={FideTitle.CM}
					>{FideTitle.CM}</RadioItem
				>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.FM} value={FideTitle.FM}
					>{FideTitle.FM}</RadioItem
				>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.IM} value={FideTitle.IM}
					>{FideTitle.IM}</RadioItem
				>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.GM} value={FideTitle.GM}
					>{FideTitle.GM}</RadioItem
				>
			</RadioGroup>
		</div>
		<div class="w-full py-2">
			<RadioGroup>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.WCM} value={FideTitle.WCM}
					>{FideTitle.WCM}</RadioItem
				>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.WFM} value={FideTitle.WFM}
					>{FideTitle.WFM}</RadioItem
				>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.WIM} value={FideTitle.WIM}
					>{FideTitle.WIM}</RadioItem
				>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.WGM} value={FideTitle.WGM}
					>{FideTitle.WGM}</RadioItem
				>
			</RadioGroup>
		</div>
		<div>
			<RadioGroup>
				<RadioItem bind:group={trainerProfile.fideTitle} name={FideTitle.NT} value={FideTitle.NT}
					>Non-Titled Player</RadioItem
				>
			</RadioGroup>
		</div>
	</div>
</div>
