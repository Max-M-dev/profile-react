import React from "react";

import { Cover } from "@/components/cover";
import { Avatar } from "@/ui_kit/avatar";
import { Button } from "@/ui_kit/button";

import classes from "./account.module.scss";
import { PropsForUiType } from "./types";
import { selectClasses } from "@/utils";

export function AccountUi(props: PropsForUiType) {
	const { userInfo, isMyProfile, logout } = props;
	const toCls = selectClasses(classes);

	if (userInfo.status === "Error") {
		return <div className={toCls("container")}>Упс, произошла ошибка...</div>;
	}
	if (userInfo.status === "Loading") {
		return <div className={toCls("container")}>Loading...</div>;
	}
	if (userInfo.status !== "Ok" || userInfo.data === undefined) {
		return (
			<div className={toCls("container")}>Упс, что-то пошло не так...</div>
		);
	}
	const { name, email, avatarUrl, accountContent, cover } = userInfo.data;
	return (
		<div className={toCls("account")}>
			<Cover isMyProfile={isMyProfile} src={cover} />
			<div className={toCls("account__body container")}>
				<div className={toCls("account__content")}>
					<Avatar
						className={toCls("account__avatar")}
						hover={isMyProfile}
						src={avatarUrl}
						value={name.charAt(0)}
						size="big"
					/>
					<div className={toCls("account__content-head")}>
						<div className={toCls("account__user-info")}>
							<div className={toCls("account__name title")}>{name}</div>
							<div className={toCls("account__email")}>{email}</div>
						</div>
						<div className={toCls("account__edit-wrapper")}>
							{isMyProfile && (
								<Button className={toCls("account__edit button-icon-edit")}>
									Редактировать
								</Button>
							)}
						</div>
					</div>
					<div className={toCls("account__content-body")}>
						<div className={toCls("account__text")}>
							{accountContent || "Тут еще нет записи."}
						</div>
						{isMyProfile && (
							<Button
								onClick={() => logout()}
								className={toCls("account__logout button-icon-entry")}
							>
								Выйти
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
