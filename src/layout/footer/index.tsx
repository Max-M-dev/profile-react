import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { selectClasses } from "@/utils";

import classes from "./style.module.scss";
const toCls = selectClasses(classes);

export function Footer() {
	const location = useLocation();
	if (location.pathname === "/reg") {
		return (
			<Wrapper>
				Уже есть аккаунт?{" "}
				<Link to="login" className={toCls("footer__link-login")}>
					Войти
				</Link>
			</Wrapper>
		);
	} else if (location.pathname === "/login") {
		return (
			<Wrapper>
				Еще нет аккаунта?{" "}
				<Link to="reg" className={toCls("footer__link-login")}>
					Зарегистрироваться
				</Link>
			</Wrapper>
		);
	} else {
		return <></>;
	}
}

function Wrapper({ children }: { children: ReactNode }) {
	return (
		<footer className={toCls("footer")}>
			<span className={toCls("footer__content")}>{children}</span>
		</footer>
	);
}
