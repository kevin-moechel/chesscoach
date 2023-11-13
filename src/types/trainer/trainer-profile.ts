export type TrainerProfile = {
	name: string;
	fideRating: string;
	chessComUsername: string;
	lichessOrgUsername: string;
	ageGroups: Array<string>;
	fideTitle: string;
	maxTrainingRating: number;
	locationPreferences: Array<string>;
	location: string;
	travelTime: number;
};
