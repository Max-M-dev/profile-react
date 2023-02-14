import React from "react";
import { Button } from "@/ui_kit/button";
import { selectClasses } from "@/utils";

import classes from "./cover.module.scss";
import { PropsForUiType } from "./types";

export function CoverUi(props: PropsForUiType) {
	const { src, isMyAcc } = props;
	const toCls = selectClasses(classes);
	const renderButton = () => {
		if (src) {
			return (
				<Button className={toCls("cover__button cover__button--del")}>
					Удалить
				</Button>
			);
		}
		return (
			<Button className={toCls("cover__button cover__button--upload")}>
				Загрузить
			</Button>
		);
	};

	return (
		<div className={toCls("cover")}>
			{src && <img className={toCls("cover__img")} src={src} alt="" />}
			{isMyAcc && renderButton()}
		</div>
	);
}
