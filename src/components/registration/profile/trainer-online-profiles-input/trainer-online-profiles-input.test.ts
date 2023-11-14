import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';
import TrainerOnlineProfilesInput from './trainer-online-profiles-input.svelte';

describe('TrainerOnlineProfilesInput', () => {
	it('Accepts the name of the trainer', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		trainerProfile.name = 'asd';
		const params = { trainerProfile: trainerProfile, baseInformationAvailable: false };
		render(TrainerOnlineProfilesInput, params);

		// act
		const nameInput: HTMLInputElement = screen.getByLabelText('Your name', { selector: 'input' });
		nameInput.value = 'Test name';
		await fireEvent.input(nameInput);

		// assert
		expect(params.trainerProfile.name).toEqual('Test name');
	});

	it('Must have at least a name as base information', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		const params = { trainerProfile: trainerProfile, baseInformationAvailable: false };
		const { component } = render(TrainerOnlineProfilesInput, params);

		// act
		const nameInput: HTMLInputElement = screen.getByLabelText('Your name', { selector: 'input' });
		nameInput.value = 'Test name';
		await fireEvent.input(nameInput);

		// assert
		expect(component.getBaseInformationAvailable()).toBeTruthy();
	});
});
