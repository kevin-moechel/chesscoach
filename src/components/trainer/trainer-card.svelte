<script lang="ts">
	import chesscomIcon from '$lib/assets/chess-pages/chesscom.png';
	import lichessorgIcon from '$lib/assets/chess-pages/lichessorg.png';
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { TrainerProfile } from '../../types/trainer/trainer-profile';
	import { FideTitle } from '../../types/trainer/fide-title';

	export let trainerProfile: TrainerProfile;
</script>

<div class="max-w-lg" style="caret-color: transparent">
	<img
		class="rounded-t-xl"
		alt="The coach"
		src="https://media.cnn.com/api/v1/images/stellar/prod/230527051429-03-magnus-carlsen-superbet-rapid-blitz-2023.jpg?c=16x9&q=h_540,w_960,c_fill/f_webp"
	/>
	<div class="flex bg-gray-800 container px-3 py-4 opacity-90 rounded-b-xl">
		<div class="flex items-center space-x-5 grow">
			{#if trainerProfile.fideTitle != FideTitle.NT}
				<Avatar
					initials={trainerProfile.fideTitle}
					background="bg-red-800"
					class="text-white h-14 sm:h-16"
				/>
			{/if}
			<div class="font-bold text-white">
				<p class="text-base sm:text-xl">{trainerProfile.name}</p>
				<p class="text-xs sm:text-lg">{trainerProfile.location}</p>
			</div>
		</div>
		<div class="flex items-center space-x-5">
			{#if trainerProfile.chessComUsername != null}
				<div>
					<a href="www.chess.com" target="_blank">
						<img class="object-fill h-10 sm:h-12" alt="chess.com profile" src={chesscomIcon} /></a
					>
				</div>
			{/if}
			{#if trainerProfile.lichessOrgUsername != null}
				<div>
					<a href="www.lichess.org" target="_blank">
						<img
							class="object-fill h-10 sm:h-12"
							alt="lichess.org profile"
							src={lichessorgIcon}
						/></a
					>
				</div>
			{/if}
		</div>
	</div>
</div>
