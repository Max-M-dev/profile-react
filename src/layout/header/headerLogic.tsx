import React, { FC } from "react";
import { useAuth } from "@/hooks/useAuth";

import { PropsForUiType, PropsType } from "./types";

export function headerLogic(Ui: FC<PropsForUiType>, props: PropsType) {
	const { userAuth } = useAuth();
	const propsForUi = {
		...props,
		userAuth,
	};
	return Ui(propsForUi);
}
