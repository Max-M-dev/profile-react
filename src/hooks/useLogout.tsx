import { NAME_KEY_FOR_LOGIN } from "@/const";

export function useLogout() {
	// localStorage.removeItem(NAME_KEY_FOR_LOGIN);
	localStorage.setItem(NAME_KEY_FOR_LOGIN, "");
}
