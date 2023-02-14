export type DataEntityType = {
	id: number;
	name: string;
	avatarUrl?: string;
	email: string;
	profilePath?: string;
	accountContent?: string;
	cover?: string;
};

export type DataType = Array<DataEntityType>;
