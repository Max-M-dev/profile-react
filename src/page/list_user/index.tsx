import { ListUserUi } from "./list_user_ui";
import { ListUserLogic } from "./list_user_logic";
import { PropsType } from "./types";

export function ListUser(props: PropsType) {
	return ListUserLogic(ListUserUi, props);
}
