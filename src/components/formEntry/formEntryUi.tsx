import React from "react";

import classes from "./formEntry.module.scss";
import { PropsForUiType } from "./types";

export function FormEntryUi({ children, title, action }: PropsForUiType) {
	return (
		<div className="form-entry">
			<div className="form-entry__wrapper">
				<div className="form-entry__title">{title}</div>
				<form action={action || "#"} className="form-entry__form">
					{children}
				</form>
			</div>
		</div>
	);
}
