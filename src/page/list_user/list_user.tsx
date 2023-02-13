import { Link } from "react-router-dom";
import { Avatar } from "@/ui_kit/avatar";
import "./list_user.scss";
export function ListUser() {
	return (
		<div className="list-user container">
			<div className="list-user__title title">Список аккаунтов</div>

			<div className="list-user__content">
				<Entity name="Max" email="Max@example.com" />
				<Entity
					name="Анна"
					avatarUrl="https://qph.cf2.quoracdn.net/main-qimg-81db30bf0c600d89d3352db8b7ef1977-lq"
					email="eugenearbatsky@yandex.ru"
				/>

				<Entity
					name="Мария"
					avatarUrl="https://postila.ru/data/16/f4/62/29/16f46229d6df0ec75da2abd9a746b140f6292dd505aa5bd836dbedfaf15268ec.jpg"
					email="example@gmail.com"
				/>
				<Entity
					name="Мария"
					avatarUrl="https://postila.ru/data/16/f4/62/29/16f46229d6df0ec75da2abd9a746b140f6292dd505aa5bd836dbedfaf15268ec.jpg"
					email="example@gmail.com"
				/>
			</div>
		</div>
	);
}

function Entity({
	avatarUrl,
	name,
	email,
}: {
	avatarUrl?: string;
	name: string;
	email: string;
}) {
	const renderAvatar = () => {
		if (avatarUrl) {
			return <Avatar src={avatarUrl} size="small" />;
		} else {
			return <Avatar value={name.charAt(0).toUpperCase()} size="small" />;
		}
	};
	return (
		<div className="list-user__entity">
			{renderAvatar()}
			<div className="list-user__info">
				<Link to="user" className="list-user__name">
					{name}
				</Link>
				<div className="list-user__email">{email}</div>
			</div>
		</div>
	);
}
