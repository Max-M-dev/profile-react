import { DataEntityType } from "public/data.types";

export type PropsType = {};
export type PropsForUiType = PropsType & {
	userAuth?: DataEntityType;
};
