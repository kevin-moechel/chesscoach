import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import type { TrainerProfile } from '../../../../types/trainer/trainer-profile';
import EloRangeSlider from './elo-range-slider.svelte';

describe('AgeGroupSelector', () => {
	it('Should cap the max rating to train to the elo of the player', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		trainerProfile.fideRating = 2050;
		render(EloRangeSlider, { props: { trainerProfile } });

		// act
		const maxSliderValue = Number(screen.getByLabelText('Rating range').getAttribute('max'));

		// assert
		expect(maxSliderValue).toBe(2100);
	});

	it('Should cap the max rating to train to 2800 if no player elo is present', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(EloRangeSlider, { props: { trainerProfile } });

		// act
		const maxSliderValue = Number(screen.getByLabelText('Rating range').getAttribute('max'));

		// assert
		expect(maxSliderValue).toBe(2800);
	});

	it('Should use half the players elo as default for the training range', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(EloRangeSlider, { props: { trainerProfile } });

		// assert
		expect(trainerProfile.maxTrainingRating).toBe(1400);
	});

	it('Should change the maxTrainingRating if theinput changes', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(EloRangeSlider, { props: { trainerProfile } });

		// act
		const ratingRange = screen.getByLabelText('Rating range') as HTMLInputElement;
		ratingRange.value = '1600';
		ratingRange.dispatchEvent(new Event('input'));

		// assert
		expect(trainerProfile.maxTrainingRating).toBe(1600);
	});

	it('Should not be able to change the maxTrainingRating above the allowed range', () => {
		// arrange
		const trainerProfile = {} as TrainerProfile;
		render(EloRangeSlider, { props: { trainerProfile } });

		// act
		const ratingRange = screen.getByLabelText('Rating range') as HTMLInputElement;
		ratingRange.value = '3000';
		ratingRange.dispatchEvent(new Event('input'));

		// assert
		// If the value is higher than allowed it will automatically cap at the max value
		expect(trainerProfile.maxTrainingRating).toBe(2800);
	});
});
