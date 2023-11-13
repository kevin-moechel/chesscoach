<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { TrainerProfile } from '../../types/trainer/trainer-profile';

	export let trainerProfile: TrainerProfile;
</script>

<div class="max-w-lg">
	<img
		alt="The coach"
		src="https://media.cnn.com/api/v1/images/stellar/prod/230527051429-03-magnus-carlsen-superbet-rapid-blitz-2023.jpg?c=16x9&q=h_540,w_960,c_fill/f_webp"
	/>
	<div class="flex bg-gray-800 container px-3 py-4 opacity-90">
		<div class="flex items-center space-x-5 grow">
			{#if trainerProfile.fideTitle.length > 0}
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
			<div>
				<a href="www.chess.com" target="_blank">
					<img
						class="object-fill h-10 sm:h-12"
						alt="chess.com profile"
						src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpkXK09k.png"
					/></a
				>
			</div>
			<div>
				<a href="www.lichess.org" target="_blank">
					<img
						class="object-fill h-10 sm:h-12"
						alt="lichess.org profile"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lichess_Logo_2019.svg/800px-Lichess_Logo_2019.svg.png"
					/></a
				>
			</div>
		</div>
	</div>
</div>
