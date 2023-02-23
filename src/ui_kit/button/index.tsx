import { PropsType } from "./types";

export function Button({ theme, ...props }: PropsType) {
	let themeBtn = "button-default";
	if (theme === "revers") {
		themeBtn = "button-default-revers";
	}
	props.className += ` ${themeBtn}`;
	return ButtonBase(props);
}

function ButtonBase(props: PropsType) {
	const { children, className, ...otherProps } = props;
	return (
		<button className={className} {...otherProps}>
			{children}
		</button>
	);
}
