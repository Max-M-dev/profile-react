import React, { FC } from "react";
import { PropsForUiType, PropsType } from "./types";
import { useIsMyAcc } from "@/hooks/useIsMyAcc";

export function CoverLogic(Ui: FC<PropsForUiType>, props: PropsType) {
	const isMyAcc = useIsMyAcc();
	const propsForUi = {
		isMyAcc,
		...props,
	};
	return Ui(propsForUi);
}
