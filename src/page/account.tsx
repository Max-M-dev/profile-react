import { Cover } from "@/components/cover";
import { Avatar } from "@/ui_kit/avatar";
import { Button } from "@/ui_kit/button";
import { useParams } from "react-router";

export function Account() {
	console.log(useParams());
	return (
		<div className="account">
			<Cover />
			<div className="account__body container">
				<div className="account__content">
					<Avatar
						className="account__avatar"
						hover={true}
						value="В"
						size="big"
					/>
					<div className="account__content-head">
						<div className="account__user-info">
							<div className="account__name title">Владислав</div>
							<div className="account__email">example@gmail.com</div>
						</div>
						<div className="account__edit-wrapper">
							<Button className="account__edit button-icon-edit">
								Редактировать
							</Button>
						</div>
					</div>
					<div className="account__content-body">
						<div className="account__text">
							Рыбатекст используется дизайнерами, проектировщиками и
							фронтендерами, когда нужно быстро заполнить макеты или прототипы
							содержимым. Это тестовый контент, который не должен нести никакого
							смысла, лишь показать наличие самого текста или продемонстрировать
							типографику в деле.
						</div>
						<Button className="account__logout button-icon-entry">Выйти</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
