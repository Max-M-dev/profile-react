import React, { FC, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import { useIsMyAcc } from "@/hooks/useIsMyAcc";

import { PropsForUiType, PropsType, RequestUserInfo } from "./types";
import { DataEntityType, DataType } from "public/data.types";
import { useLogout } from "@/hooks/useLogout";

export function AccountLogic(Ui: FC<PropsForUiType>, props: PropsType) {
	const { user: currentPathProfile } = useParams();
	const [userInfo, setUserInfo] = useState<RequestUserInfo>({
		status: "Loading",
	});
	const isMyAcc = useIsMyAcc();
	useLayoutEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
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
		useLogout();
		location.reload();
	};
	const propsForUi = {
		userInfo,
		isMyAcc,
		logout,
		...props,
	};
	return Ui(propsForUi);
}
