import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';
import AgeGroupSelector from './age-group-selector.svelte';

describe('AgeGroupSelector', () => {
	it('Should write a single age group into the profile', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(AgeGroupSelector, { props: { trainerProfile } });

		// act
		screen.getByText('Adults').click();

		// assert
		expect(trainerProfile.ageGroups).toContain('adults');
	});

	it('Should write multiple age groups into the profile', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(AgeGroupSelector, { props: { trainerProfile } });

		// act
		screen.getByText('Adults').click();
		screen.getByText('Teenagers').click();
		screen.getByText('Children').click();

		// assert
		expect(trainerProfile.ageGroups).toContain('adults');
		expect(trainerProfile.ageGroups).toContain('teenager');
		expect(trainerProfile.ageGroups).toContain('children');
	});
});
