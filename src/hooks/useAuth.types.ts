import { DataEntityType } from "public/data.types";

export type SignIn = (
	email: string,
	password: string,
	onSuccess?: (param: any) => void,
	onError?: (param: string) => void
) => void;

export type SignOut = () => void;
export type IsMyProfile = (paramsUser: string) => boolean;

export type UseServiceAuth = {
	userAuth: DataEntityType | undefined;
	signIn: SignIn;
	signOut: SignOut;
	isMyProfile: IsMyProfile;
};
