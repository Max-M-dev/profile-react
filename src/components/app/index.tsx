import { Route, Routes } from "react-router-dom";
import { ListUser } from "@/page/";
import { Header } from "@/layout/header";
import { Login } from "@/page/login";
import { Reg } from "@/page/reg";
import { Footer } from "@/layout/footer";
import { NotFound } from "@/page/not_found";
import { Account } from "@/page/account";

export function App() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<main>
					<Routes>
						<Route index element={<ListUser />} />
						<Route path="login" element={<Login />} />
						<Route path="reg" element={<Reg />} />
						<Route path="user/:user" element={<Account />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
}
