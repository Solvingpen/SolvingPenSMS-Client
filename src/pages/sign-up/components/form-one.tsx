import { useForm } from "react-hook-form";
import Input from "../../../components/input";
import type { Dispatch, SetStateAction } from "react";
import NavButton from "./nav-button";

/** First form on the sign up page */
const FormOne = ({
	setCurrentPage,
	setFormData
}: {
	setCurrentPage: Dispatch<SetStateAction<1 | 2 | 3>>;
	setFormData: Dispatch<SetStateAction<any>>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({ mode: "onBlur" });

	return (
		<form
			onSubmit={handleSubmit(form => {
				if (isValid) {
					setCurrentPage(2);
					setFormData((prev: any) => {
						return { ...prev, ...form };
					});
				}
			})}
			className="space-y-24">
			<div className="max-w-[320px] mx-auto space-y-3">
				<Input
					autoComplete="name"
					errors={errors}
					register={register}
					id="first-name"
					name="first_name"
					label="First name"
					type="text"
					errorMessages={{
						invalid: "Use a valid first name",
						empty: "First name cannot be empty"
					}}
					pattern={
						RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+$/) as unknown as string
					}
					required
				/>
				<Input
					autoComplete="additional-name"
					errors={errors}
					register={register}
					id="last-name"
					name="last_name"
					label="Last name"
					type="text"
					errorMessages={{
						invalid: "Use a valid last name",
						empty: "Last name cannot be empty"
					}}
					pattern={
						RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+$/) as unknown as string
					}
					required
				/>
				<Input
					autoComplete="email"
					errors={errors}
					register={register}
					id="email"
					placeholder="email@provider.com"
					name="email"
					label="Email"
					type="email"
					errorMessages={{
						invalid: "Use a valid email",
						empty: "Email cannot be empty"
					}}
					pattern={
						RegExp(
							/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
						) as unknown as string
					}
					required
				/>
				<Input
					autoComplete="new-password"
					errors={errors}
					register={register}
					id="password"
					name="password"
					label="Password"
					type="password"
					errorMessages={{
						invalid:
							"Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character",
						empty: "Password cannot be empty"
					}}
					pattern={
						RegExp(
							/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
						) as unknown as string
					}
					required
				/>
				{/* <div className="max-w-[320px]">
					<EmailVerificationInput />
				</div> */}
				<Input
					autoComplete="tel"
					errors={errors}
					register={register}
					id="phone-number"
					name="phone_number"
					label="Phone number"
					type="tel"
					placeholder="08123456789"
					errorMessages={{
						invalid: "Please use a valid phone number",
						empty: "Phone number cannot be empty"
					}}
					pattern={
						RegExp(/^(?:\+234|0)?[789]\d{9}$/) as unknown as string
					}
					required
				/>
			</div>
			<div className="max-w-[540px] mx-auto">
				<NavButton action="next" />
			</div>
		</form>
	);
};

export default FormOne;
