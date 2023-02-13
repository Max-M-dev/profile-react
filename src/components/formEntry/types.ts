import { ReactNode } from "react";

export type PropsType = {
	children: ReactNode;
	title: string;
	action?: string;
};
export type PropsForUiType = PropsType & {};
