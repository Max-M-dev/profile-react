import React from "react";
export type PropsType = React.InputHTMLAttributes<HTMLInputElement> & {
	icon?: string;
	isValid?: (result: boolean) => void;
};
