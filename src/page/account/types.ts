import { DataEntityType } from "public/data.types";

export type PropsType = {};
export type PropsForUiType = PropsType & {
	userInfo: RequestUserInfo;
	isMyProfile: boolean;
	logout: () => void;
};

export type RequestUserInfo = {
	data?: DataEntityType;
	status: "Loading" | "Error" | "Ok";
	errorMessage?: string;
};
