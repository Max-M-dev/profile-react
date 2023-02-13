import { useEffect, useRef } from "react";
import classes from "./input.module.scss";
import { PropsType } from "./types";

export function Input(props: PropsType) {
	const { icon, className, ...propsOther } = props;
	if (icon) {
		return (
			<div className={classes["wrapper-icon"]}>
				<InputDefalut
					className={`${classes["input-with-icon"]}`}
					{...propsOther}
				/>
				<img className={classes["icon"]} src={icon} alt="" />
			</div>
		);
	}
	return InputDefalut(props);
}

function InputDefalut({ className, isValid, ...props }: PropsType) {
	const ref = useRef<HTMLInputElement>(null);
	const isValidInput = !!ref?.current?.validity.valid;
	useEffect(() => {
		if (!ref.current || !isValid) {
			return;
		}
		isValid(ref.current.validity.valid);
	}, [ref.current, isValidInput]);
	return (
		<input
			ref={ref}
			className={`${classes["input-default"]} ${className}`}
			{...props}
		/>
	);
}
