import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.scss";
import { PropsForUiType } from "./types";
import { Avatar } from "@/ui_kit/avatar";
import { selectClasses } from "@/utils";

export function headerUi(props: PropsForUiType) {
	const toCls = selectClasses(classes);
	const { userAuth } = props;
	const auth = () => {
		if (userAuth) {
			return (
				<div className={toCls("header__user")}>
					<div className={toCls("header__user-name")}>{userAuth.name}</div>
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
		<header className={toCls("header container")}>
			<div className={toCls("header__info-company")}>
				<Link to="/" className={toCls("header__logo")}>
					<img
						className={toCls("img-responsive")}
						src="/assets/logo.svg"
						alt=""
					/>
				</Link>
				<div className={toCls("header__title")}>
					Разрабатываем и запускаем сложные веб проекты
				</div>
			</div>
			<div className={toCls("header__info-user")}>{auth()}</div>
		</header>
	);
}
