import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@/ui_kit/avatar";
import "./list_user.scss";
import { PropsForUiType } from "./types";

export function ListUserUi({ users, ...props }: PropsForUiType) {
	return (
		<div className="list-user container">
			<div className="list-user__title title">Список аккаунтов</div>

			<div className="list-user__content">
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
	const renderAvatar = () => {
		if (avatarUrl) {
			return <Avatar src={avatarUrl} size="small" />;
		} else {
			return <Avatar value={name.charAt(0).toUpperCase()} size="small" />;
		}
	};
	const userLink = `user/${userPath || id}`;
	return (
		<div className="list-user__entity">
			{renderAvatar()}
			<div className="list-user__info">
				<Link to={userLink} className="list-user__name">
					{name}
				</Link>
				<div className="list-user__email">{email}</div>
			</div>
		</div>
	);
}
