import { useLayoutEffect, useState } from "react";
import { FormEntry } from "@/components/formEntry";
import { useValueInput } from "@/hooks/useValueInput";
import { Button } from "@/ui_kit/button";
import { Form } from "@/ui_kit/form";
const { Input } = Form;

export function Login() {
	const [valueEmail, attrEmail] = useValueInput();
	const [valuePass, attrPass] = useValueInput();

	const [isValidInps, setIsValidInps] = useState({
		email: false,
		password: false,
	});
	const isDisabledButton = !!Object.values(isValidInps).filter(
		(value) => value === false
	).length;

	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<FormEntry title="Вход в Yoldi Agency">
			<Input
				type="email"
				icon="../../img/email.svg"
				placeholder="E-mail"
				required
				isValid={(val) => setIsValidInps({ ...isValidInps, email: val })}
				{...attrEmail}
			/>

			<div className="form-entry__input-password-wrapper">
				<Input
					className="form-entry__input-password"
					icon="../../img/lock.svg"
					type={isShowPassword ? "text" : "password"}
					placeholder="Пароль"
					autoComplete="current-password"
					required
					isValid={(val) => setIsValidInps({ ...isValidInps, password: val })}
					{...attrPass}
				/>
				<span
					className={`form-entry__input-password-eye ${
						isShowPassword && "form-entry__input-password-eye--show"
					}`}
					onClick={() => setIsShowPassword((prev) => !prev)}
				>
					<svg
						width="25"
						height="13"
						viewBox="0 0 25 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M12.5 0.25C5.98755 0.25 0.976562 5.9873 0.976562 5.9873L0.512695 6.5L0.976562 7.0127C0.976562 7.0127 5.54504 12.222 11.6211 12.7012C11.911 12.7378 12.2009 12.75 12.5 12.75C12.7991 12.75 13.089 12.7378 13.3789 12.7012C19.455 12.222 24.0234 7.0127 24.0234 7.0127L24.4873 6.5L24.0234 5.9873C24.0234 5.9873 19.0125 0.25 12.5 0.25ZM12.5 1.8125C14.2212 1.8125 15.8081 2.28247 17.1875 2.91113C17.6849 3.73511 17.9688 4.6842 17.9688 5.71875C17.9688 8.54163 15.8508 10.861 13.1104 11.1631C13.0951 11.1661 13.0768 11.16 13.0615 11.1631C12.8754 11.1722 12.6892 11.1875 12.5 11.1875C12.2925 11.1875 12.0911 11.1753 11.8896 11.1631C9.14917 10.861 7.03125 8.54163 7.03125 5.71875C7.03125 4.69946 7.30591 3.75037 7.78809 2.93555H7.76367C9.15527 2.29468 10.7605 1.8125 12.5 1.8125ZM12.5 3.375C11.2061 3.375 10.1562 4.4248 10.1562 5.71875C10.1562 7.0127 11.2061 8.0625 12.5 8.0625C13.7939 8.0625 14.8438 7.0127 14.8438 5.71875C14.8438 4.4248 13.7939 3.375 12.5 3.375ZM5.66406 4.10742C5.54199 4.63232 5.46875 5.16028 5.46875 5.71875C5.46875 7.08899 5.85938 8.37073 6.54297 9.4541C4.57458 8.3158 3.2074 6.95776 2.75879 6.5C3.13416 6.11548 4.18091 5.09619 5.66406 4.10742ZM19.3359 4.10742C20.8191 5.09619 21.8658 6.11548 22.2412 6.5C21.7926 6.95776 20.4254 8.3158 18.457 9.4541C19.1406 8.37073 19.5312 7.08899 19.5312 5.71875C19.5312 5.16028 19.458 4.62622 19.3359 4.10742Z" />
					</svg>
				</span>
			</div>
			<Button theme="revers" disabled={isDisabledButton}>
				Войти
			</Button>
		</FormEntry>
	);
}
