import { forwardRef } from "react";
import classes from "./input.module.scss";
import { PropsType } from "./types";

export const Input = forwardRef<HTMLInputElement, PropsType>(
	(props: PropsType, ref) => {
		const { icon, className, ...propsOther } = props;
		if (icon) {
			return (
				<div className={classes["wrapper-icon"]}>
					<InputDefalut
						ref={ref}
						className={`${classes["input-with-icon"]}`}
						{...propsOther}
					/>
					<img className={classes["icon"]} src={icon} alt="" />
				</div>
			);
		}
		return <InputDefalut {...props} />;
	}
);

const InputDefalut = forwardRef<HTMLInputElement, PropsType>(
	({ className, ...props }: PropsType, ref) => {
		return (
			<input
				ref={ref}
				className={`${classes["input-default"]} ${className}`}
				{...props}
			/>
		);
	}
);
