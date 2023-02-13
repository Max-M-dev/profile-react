import { ReactNode } from "react";

export type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	theme?: "default" | "revers";
	children?: ReactNode;
};
export type PropsForUiType = PropsType & {};
