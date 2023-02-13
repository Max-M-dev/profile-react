import classes from "./avatar.module.scss";
import { PropsType } from "./types";
export function Avatar({
	value,
	size,
	className,
	src,
	hover,
	...props
}: PropsType) {
	let classSize;
	let classHover = hover ? classes["user-avatar-hover"] : "";
	if (size === "big") {
		classSize = classes["user-avatar-big"];
	} else {
		classSize = classes["user-avatar-small"];
	}

	const content = () => {
		if (src) {
			return <img src={src} alt={value || ""} />;
		} else if (value) {
			return value;
		} else {
			return "";
		}
	};
	//"account__avatar  user-avatar-hover"
	return (
		<div className={`${classSize} ${classHover} ${className}`}>{content()}</div>
	);
}
