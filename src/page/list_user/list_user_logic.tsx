import React, { FC, useLayoutEffect, useState } from "react";
import { PropsForUiType, PropsType } from "./types";
import { DataType } from "../../../public/data.types";

export function ListUserLogic(Ui: FC<PropsForUiType>, props: PropsType) {
	const [users, setUsers] = useState<DataType>([]);
	useLayoutEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then(setUsers);
	}, []);
	const propsForUi = {
		users,
		...props,
	};
	return Ui(propsForUi);
}
