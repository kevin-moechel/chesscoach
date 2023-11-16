import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import { FideTitle } from '../../types/trainer/fide-title';
import type { TrainerProfile } from '../../types/trainer/trainer-profile';
import TrainerCard from './trainer-card.svelte';

describe('TrainerCard', () => {
	it('Displays FIDE title if the trainer has one', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		trainerProfile.name = 'Test dummy';
		trainerProfile.fideTitle = FideTitle.GM;
		const params = { trainerProfile: trainerProfile };
		const result = render(TrainerCard, params);

		// act
		const fideTitleAvatar = result.container.getElementsByClassName('avatar')[0];
		// assert
		expect(fideTitleAvatar).toBeDefined();
	});

	it('Displays no FIDE title if the trainer has none', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		trainerProfile.name = 'Test dummy';
		trainerProfile.fideTitle = FideTitle.NT;
		const params = { trainerProfile: trainerProfile };
		const result = render(TrainerCard, params);
		console.log(result.debug());

		// act
		const fideTitleAvatar = result.container.getElementsByClassName('avatar')[0];
		// assert
		expect(fideTitleAvatar).toBeUndefined();
	});
});
