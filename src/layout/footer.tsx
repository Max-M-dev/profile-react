import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export function Footer() {
	const location = useLocation();
	if (location.pathname === "/reg") {
		return (
			<Wrapper>
				Уже есть аккаунт?{" "}
				<Link to="login" className="footer__link-login">
					Войти
				</Link>
			</Wrapper>
		);
	} else if (location.pathname === "/login") {
		return (
			<Wrapper>
				Еще нет аккаунта?{" "}
				<Link to="reg" className="footer__link-login">
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
		<footer className="footer">
			<span className="footer__content">{children}</span>
		</footer>
	);
}
