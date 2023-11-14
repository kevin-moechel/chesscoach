import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';
import TrainingLocationSelector from './training-location-selector.svelte';

describe('TrainingLocationSelector', () => {
	it('Remote only requires no location', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		const { component } = render(TrainingLocationSelector, { props: { trainerProfile } });

		// act
		const remoteCheckbox: HTMLInputElement = screen.getByLabelText('Remote', { selector: 'input' });
		remoteCheckbox.click();

		// assert
		expect(trainerProfile.locationPreferences).toContain('remote');
		expect(trainerProfile.locationPreferences).toHaveLength(1);
		expect(component.isLocationComplete()).toBeTruthy();
	});

	it('At the trainers location requires an actual location', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		const { component } = render(TrainingLocationSelector, { props: { trainerProfile } });

		// act
		// select myLocation
		const myLocationCheckbox: HTMLInputElement = screen.getByLabelText('In person at my location', {
			selector: 'input'
		});
		myLocationCheckbox.click();

		// add a location
		const myLocationInput: HTMLInputElement = screen.getByLabelText("I'm located here", {
			selector: 'input'
		});
		myLocationInput.value = 'Test name';
		await fireEvent.input(myLocationInput);

		// assert
		expect(myLocationCheckbox.checked).toBeTruthy();
		expect(trainerProfile.locationPreferences).toContain('myLocation');
		expect(trainerProfile.locationPreferences).toHaveLength(1);
		expect(component.isLocationComplete()).toBeTruthy();
	});

	it('At the trainees location requires an actual location and the travel distance', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		const { component } = render(TrainingLocationSelector, { props: { trainerProfile } });

		// act
		// select myLocation
		const myLocationCheckbox: HTMLInputElement = screen.getByLabelText(
			'In person at your location',
			{
				selector: 'input'
			}
		);
		myLocationCheckbox.click();

		// add a location
		const myLocationInput: HTMLInputElement = screen.getByLabelText("I'm located here", {
			selector: 'input'
		});
		myLocationInput.value = 'Test name';
		await fireEvent.input(myLocationInput);

		// assert
		expect(myLocationCheckbox.checked).toBeTruthy();
		expect(trainerProfile.locationPreferences).toContain('yourLocation');
		expect(trainerProfile.locationPreferences).toHaveLength(1);
		expect(component.isLocationComplete()).toBeFalsy();
	});

	it('At the trainees location the actual location is not sufficient', async () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		const { component } = render(TrainingLocationSelector, { props: { trainerProfile } });

		// act
		// select myLocation
		const myLocationCheckbox: HTMLInputElement = screen.getByLabelText(
			'In person at your location',
			{
				selector: 'input'
			}
		);
		myLocationCheckbox.click();

		// add a location
		const myLocationInput: HTMLInputElement = screen.getByLabelText("I'm located here", {
			selector: 'input'
		});
		myLocationInput.value = 'Test name';
		await fireEvent.input(myLocationInput);

		// add a distance
		const distanceInput: HTMLInputElement = screen.getByLabelText("How long I'd drive to you", {
			selector: 'input'
		});
		distanceInput.value = '10';
		await fireEvent.input(distanceInput);

		// assert
		expect(myLocationCheckbox.checked).toBeTruthy();
		expect(trainerProfile.locationPreferences).toContain('yourLocation');
		expect(trainerProfile.locationPreferences).toHaveLength(1);
		expect(trainerProfile.travelTime).toBe(10);
		expect(component.isLocationComplete()).toBeTruthy();
	});
});
