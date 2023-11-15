import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import type { TrainerProfile } from '../../types/trainer/trainer-profile';
import TrainerCard from './trainer-card.svelte';

describe('TrainerCard', () => {
	it('Displays FIDE title if the trainer has one', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		trainerProfile.name = 'Test dummy';
		trainerProfile.fideTitle = 'GM';
		const params = { trainerProfile: trainerProfile };
		render(TrainerCard, params);

		// act
		const nameInput: HTMLInputElement = screen.getByLabelText('Your name', { selector: 'input' });
		nameInput.value = 'Test name';
		await fireEvent.input(nameInput);

		// assert
		expect(params.trainerProfile.name).toEqual('Test name');
	});
});
