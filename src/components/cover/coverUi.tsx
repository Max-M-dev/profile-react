import React from "react";

import classes from "./cover.module.scss";
import { PropsForUiType } from "./types";

export function CoverUi(props: PropsForUiType) {
	const {} = props;
	return (
		<div className={classes["cover"]}>
			<img
				className={classes["cover__img"]}
				src="https://img.freepik.com/premium-photo/yellow-hypnotic-abstract-lines-wallpaper-background-design-super-bright-colors-juicy-natural-texture_88135-40082.jpg?w=2000"
				alt=""
			/>
			<button
				className={`${classes["cover__button"]}
			${classes["cover__button--upload"]}
			button-default`}
			>
				Загрузить
			</button>
			{/* <button className="cover__button cover__button--del button-default">
				Удалить
			</button> */}
		</div>
	);
}
