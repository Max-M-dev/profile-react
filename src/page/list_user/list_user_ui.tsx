import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@/ui_kit/avatar";
import { selectClasses } from "@/utils";
import classes from "./list_user.module.scss";

import { PropsForUiType } from "./types";

export function ListUserUi({ users, ...props }: PropsForUiType) {
	const toCls = selectClasses(classes);
	return (
		<div className={toCls("list-user container")}>
			<div className={toCls("list-user__title title")}>Список аккаунтов</div>

			<div className={toCls("list-user__content")}>
				{users.map((user) => {
					const propsForEntiry = {
						key: user.id,
						id: user.id,
						name: user.name,
						email: user.email,
						avatarUrl: user?.avatarUrl,
						userPath: user?.profilePath,
					};
					return <Entity {...propsForEntiry} />;
				})}
			</div>
		</div>
	);
}

function Entity({
	id,
	name,
	avatarUrl,
	email,
	userPath,
}: {
	id: number;
	avatarUrl?: string;
	name: string;
	email: string;
	userPath?: string;
}) {
	const toCls = selectClasses(classes);
	const renderAvatar = () => {
		if (avatarUrl) {
			return <Avatar src={avatarUrl} size="small" />;
		} else {
			return <Avatar value={name.charAt(0).toUpperCase()} size="small" />;
		}
	};
	const userLink = `user/${userPath || id}`;
	return (
		<div className={toCls("list-user__entity")}>
			{renderAvatar()}
			<div className={toCls("list-user__info")}>
				<Link to={userLink} className={toCls("list-user__name")}>
					{name}
				</Link>
				<div className={toCls("list-user__email")}>{email}</div>
			</div>
		</div>
	);
}
