import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { NAME_KEY_FOR_LOGIN } from "@/const";
import { getData } from "@/service/getData";
import { DataEntityType } from "public/data.types";
import { IsMyProfile, SignIn, UseServiceAuth } from "./useAuth.types";

export const ContextAuth = createContext<UseServiceAuth>({} as UseServiceAuth);

export function ProviderAuth({ children }: { children: React.ReactNode }) {
	const auth = useServiceAuth();
	return <ContextAuth.Provider value={auth}>{children}</ContextAuth.Provider>;
}

export function useAuth() {
	return useContext<UseServiceAuth>(ContextAuth);
}

function useServiceAuth() {
	const [userAuth, setUserAuth] = useState<DataEntityType>();
	const userId = 1;

	useEffect(initAuth, []);

	function initAuth() {
		const storageUserId = localStorage.getItem(NAME_KEY_FOR_LOGIN);
		if (storageUserId && storageUserId === String(userId)) {
			getDataUser(userId);
		}
	}
	const signIn: SignIn = (email, password, onSuccess, onError) => {
		if (email === "admin@example.com" && password === "admin") {
			localStorage.setItem(NAME_KEY_FOR_LOGIN, String(userId));
			getDataUser(userId)
				.then((res) => {
					onSuccess && onSuccess(res);
				})
				.catch((error) => {
					onError && onError(error.message);
				});
		} else {
			onError && onError("Ошибка");
		}
	};

	const signOut = () => {
		localStorage.setItem(NAME_KEY_FOR_LOGIN, "");
		setUserAuth(undefined);
	};
	const isMyProfile: IsMyProfile = useCallback(
		(paramsUser) => {
			if (!userAuth) {
				return false;
			}
			const checkName = paramsUser === userAuth?.profilePath;
			const checkId = Number(paramsUser) === userAuth.id;
			if (checkName || checkId) {
				return true;
			}
			return false;
		},
		[userAuth]
	);

	const getDataUser = (
		findUserId: number
	): Promise<DataEntityType | undefined> => {
		return getData()
			.then((users) => {
				const userData = users.find((user) => user.id === findUserId);
				if (userData) {
					return userData;
				}
				const msg = "Не удалось найти пользователя с таким id";
				throw new Error(msg);
			})
			.then((res) => {
				setUserAuth(res);
				return res;
			});
	};

	return { userAuth, signIn, signOut, isMyProfile };
}
