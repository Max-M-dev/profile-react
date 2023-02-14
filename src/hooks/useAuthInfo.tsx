import { NAME_KEY_FOR_LOGIN } from "@/const";
import { getData } from "@/service/getData";
import { DataEntityType } from "public/data.types";
import { useLayoutEffect, useState } from "react";

export function useAuthInfo() {
	const [userInfo, setUserInfo] = useState<DataEntityType | undefined>();
	const loginUserId = localStorage.getItem(NAME_KEY_FOR_LOGIN);
	useLayoutEffect(() => {
		if (loginUserId) {
			const loginUserIdInt = +loginUserId;
			getData()
				.then((users) => {
					return users.find((user) => user.id === loginUserIdInt);
				})
				.then(setUserInfo);
		}
	}, []);
	return userInfo;
}
