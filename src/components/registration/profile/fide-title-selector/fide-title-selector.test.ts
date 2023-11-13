import { render, screen } from '@testing-library/svelte';
import { describe, expect, it, test } from 'vitest';
import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';
import FideTitleSelector from './fide-title-selector.svelte';

describe('FideTitleSelector', () => {
	test.each([
		['GM', 'GM'],
		['IM', 'IM'],
		['FM', 'FM'],
		['WGM', 'WGM'],
		['WIM', 'WIM'],
		['WFM', 'WFM'],
		['CM', 'CM'],
		['WCM', 'WCM'],
		['NT', 'NT']
	])(`Should get the correct title: %s`, (title, expected) => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(FideTitleSelector, { props: { trainerProfile } });

		// act
		screen.getByDisplayValue(title).click();

		// assert
		expect(trainerProfile.fideTitle).toBe(expected);
	});

	it('Should have no value if none is clicked', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(FideTitleSelector, { props: { trainerProfile } });

		// assert
		expect(trainerProfile.fideTitle).toBeUndefined();
	});

	it('Should change the value if a different title is clicked', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(FideTitleSelector, { props: { trainerProfile } });

		// act
		screen.getByDisplayValue('GM').click();
		screen.getByDisplayValue('IM').click();

		// assert
		expect(trainerProfile.fideTitle).toBe('IM');
	});
});
