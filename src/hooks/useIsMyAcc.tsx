import { useParams } from "react-router";
import { useAuthInfo } from "./useAuthInfo";
import { useLayoutEffect, useState } from "react";

export function useIsMyAcc() {
	const [isMyAcc, setIsMyAcc] = useState(false);
	const authInfo = useAuthInfo();
	const params = useParams();
	useLayoutEffect(() => {
		if (!authInfo) {
			return;
		}
		const checkName = params.user === authInfo?.profilePath;
		const checkId = Number(params.user) === authInfo.id;
		if (checkName || checkId) {
			setIsMyAcc(true);
		}
	}, [authInfo]);
	return isMyAcc;
}
