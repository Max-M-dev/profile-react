import { ReactNode } from "react";

export type PropsType = {
	children: ReactNode;
	title: string;
	action?: string;
	onSubmit: () => void;
};
export type PropsForUiType = PropsType & {};
