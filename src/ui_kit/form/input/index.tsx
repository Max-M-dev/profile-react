import { forwardRef } from "react";
import classes from "./input.module.scss";
import { PropsType } from "./types";
import { selectClasses } from "@/utils";

export const Input = forwardRef<HTMLInputElement, PropsType>(
	(props: PropsType, ref) => {
		const toCls = selectClasses(classes);
		const { icon, className, ...propsOther } = props;
		if (icon) {
			return (
				<div className={toCls("wrapper-icon")}>
					<InputDefalut
						ref={ref}
						className={toCls("input-with-icon")}
						{...propsOther}
					/>
					<img className={toCls("icon")} src={icon} alt="" />
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
