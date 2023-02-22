import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.scss";
import { PropsForUiType } from "./types";
import { Avatar } from "@/ui_kit/avatar";

export function headerUi(props: PropsForUiType) {
	const { userAuth } = props;
	const auth = () => {
		if (userAuth) {
			return (
				<div className={classes["header__user"]}>
					<div className={classes["header__user-name"]}>{userAuth.name}</div>
					<Avatar
						src={userAuth.avatarUrl}
						value={userAuth.name.charAt(0).toUpperCase()}
						size="small"
					/>
				</div>
			);
		}
		return (
			<Link to="login" className={`button-default`}>
				Войти
			</Link>
		);
	};
	return (
		<header className={classes["header"] + " container"}>
			<div className={classes["header__info-company"]}>
				<Link to="/" className={classes["header__logo"]}>
					<img className="img-responsive" src="/assets/logo.svg" alt="" />
				</Link>
				<div className={classes["header__title"]}>
					Разрабатываем и запускаем сложные веб проекты
				</div>
			</div>
			<div className={classes["header__info-user"]}>{auth()}</div>
		</header>
	);
}
