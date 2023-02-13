import { ReactEventHandler, useState } from "react";

export function useValueInput() {
	const [val, setVal] = useState<string>("");
	const attr: object = {
		value: val,
		onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
			setVal(event.target.value),
	};
	return [val, attr] as const;
}
