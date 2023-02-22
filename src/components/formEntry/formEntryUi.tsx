import React from "react";

import classes from "./formEntry.module.scss";
import { PropsForUiType } from "./types";

export function FormEntryUi({ children, title, onSubmit }: PropsForUiType) {
	return (
		<div className="form-entry">
			<div className="form-entry__wrapper">
				<div className="form-entry__title">{title}</div>
				<form className="form-entry__form" onSubmit={onSubmit}>
					{children}
				</form>
			</div>
		</div>
	);
}
