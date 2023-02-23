import React from "react";
import { selectClasses } from "@/utils";

import classes from "./formEntry.module.scss";
import { PropsForUiType } from "./types";

export function FormEntryUi({ children, title, onSubmit }: PropsForUiType) {
	const toCls = selectClasses(classes);
	return (
		<div className={toCls("form-entry")}>
			<div className={toCls("form-entry__wrapper")}>
				<div className={toCls("form-entry__title")}>{title}</div>
				<form className={toCls("form-entry__form")} onSubmit={onSubmit}>
					{children}
				</form>
			</div>
		</div>
	);
}
