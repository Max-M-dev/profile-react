import React, { FC, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";

import { useAuth } from "@/hooks/useAuth";
import { getData } from "@/service/getData";

import { PropsForUiType, PropsType, RequestUserInfo } from "./types";
import { DataType } from "public/data.types";

export function AccountLogic(Ui: FC<PropsForUiType>, props: PropsType) {
	const { user: currentPathProfile } = useParams();

	const [userInfo, setUserInfo] = useState<RequestUserInfo>({
		status: "Loading",
	});
	const auth = useAuth();
	const { signOut } = auth;
	const isMyProfile = Boolean(
		currentPathProfile && auth.isMyProfile(currentPathProfile)
	);
	useLayoutEffect(() => {
		getData()
			.then((users: DataType) => {
				const res = users.find((user) => {
					const idStr = String(user.id);
					if (
						idStr === currentPathProfile ||
						user.profilePath === currentPathProfile
					)
						return true;
				});
				if (!res) {
					throw new Error("Not found user");
				}
				return res;
			})
			.then((user) => setUserInfo({ ...userInfo, data: user, status: "Ok" }))
			.catch((error) => {
				setUserInfo({
					...userInfo,
					status: "Error",
					errorMessage: error.message,
				});
			});
	}, []);
	const logout = () => {
		signOut();
	};
	const propsForUi = {
		userInfo,
		isMyProfile,
		logout,
		...props,
	};
	return Ui(propsForUi);
}
