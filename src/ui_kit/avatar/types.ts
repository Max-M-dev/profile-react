import { ReactNode } from "react";

export type PropsType = {
	size: "small" | "big";
	value?: string;
	src?: string;
	className?: string;
	hover?: boolean;
};
