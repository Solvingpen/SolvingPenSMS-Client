import { useForm } from "react-hook-form";
import Input from "../../../components/input";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import NavButton from "./nav-button";
import Checkbox from "../../../components/checkbox";
import PortalUrlInput from "./portal-url-input";

/** Second form on the sign up page */
const FormTwo = ({
	setCurrentPage,
	setFormData
}: {
	setCurrentPage: Dispatch<SetStateAction<1 | 2 | 3>>;
	setFormData: Dispatch<SetStateAction<any>>;
}) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid }
	} = useForm({ mode: "onBlur" });
	const [schoolTypes, setSchoolTypes] = useState<string[]>([]);

	useEffect(
		() =>
			setFormData((prev: any) => {
				return {
					...prev,
					schoolTypes
				};
			}),
		[schoolTypes]
	);

	register("school_types");

	return (
		<form
			onSubmit={handleSubmit(form => {
				if (isValid && schoolTypes.length > 0) {
					setCurrentPage(3);
					setFormData((prev: any) => {
						return {
							...prev,
							...form,
							schoolTypes
						};
					});
				} else if (schoolTypes.length === 0) {
					setError("schoolTypes", {
						message: "You haven't selected a school type"
					});
				} else {
					setCurrentPage(3);
					setFormData((prev: any) => {
						return {
							...prev,
							...form,
							schoolTypes: [...schoolTypes]
						};
					});
				}
			})}
			className="space-y-24">
			<div className="max-w-[320px] mx-auto space-y-3">
				<Input
					errors={errors}
					register={register}
					id="school-name"
					name="school_name"
					label="School name"
					type="text"
					errorMessages={{
						invalid: "Please use a valid school name",
						empty: "School name cannot be empty"
					}}
					pattern={
						RegExp(/^[A-Za-z0-9\s\-'\.]+$/) as unknown as string
					}
					required
				/>
				<PortalUrlInput errors={errors} register={register} />
				<Input
					errors={errors}
					register={register}
					id="country"
					name="country"
					label="Country"
					type="text"
					errorMessages={{
						invalid: "Please enter a valid country",
						empty: "Country cannot be empty"
					}}
					pattern={RegExp(/^[A-Za-z\s\-']+$/) as unknown as string}
					required
				/>
				<Input
					errors={errors}
					register={register}
					id="state"
					name="state"
					label="State"
					type="state"
					errorMessages={{
						invalid: "Please enter a valid state",
						empty: "State cannot be empty"
					}}
					pattern={RegExp(/^[A-Za-z\s\-']+$/) as unknown as string}
					required
				/>
				<Input
					errors={errors}
					register={register}
					id="town"
					name="town"
					label="Town"
					type="town"
					errorMessages={{
						invalid: "Please enter a valid town",
						empty: "Town cannot be empty"
					}}
					pattern={RegExp(/^[A-Za-z\s\-']+$/) as unknown as string}
					required
				/>
				<div className="text-sm space-y-6">
					<p>School Level ( Select all that apply)</p>
					<input
						className="hidden"
						type="hidden"
						name="schoolTypes"
					/>
					<div className="flex justify-between flex-wrap">
						<Checkbox
							onChange={e => {
								if (e.target.checked) {
									setSchoolTypes([
										...schoolTypes,
										e.currentTarget.getAttribute(
											"name"
										) as string
									]);
								} else {
									setSchoolTypes(prev => {
										const schoolTypeIndex = prev.findIndex(
											value =>
												value ===
												(e.currentTarget.getAttribute(
													"name"
												) as string)
										);
										prev.splice(schoolTypeIndex, 1);
										return [...prev];
									});
								}
							}}
							id="nursery"
							label="Nursery"
							name="nursery"
						/>
						<Checkbox
							onChange={e => {
								if (e.target.checked) {
									setSchoolTypes([
										...schoolTypes,
										e.target.name
									]);
								} else {
									setSchoolTypes(prev => {
										const schoolTypeIndex = prev.findIndex(
											value => value === e.target.name
										);
										prev.splice(schoolTypeIndex, 1);
										return [...prev];
									});
								}
							}}
							id="primary"
							label="Primary"
							name="primary"
						/>
						<Checkbox
							onChange={e => {
								if (e.target.checked) {
									setSchoolTypes([
										...schoolTypes,
										e.target.name
									]);
								} else {
									setSchoolTypes(prev => {
										const schoolTypeIndex = prev.findIndex(
											value => value === e.target.name
										);
										prev.splice(schoolTypeIndex, 1);
										return [...prev];
									});
								}
							}}
							id="secondary"
							label="Secondary"
							name="secondary"
						/>
						<small className="text-red-600 text-[12px] text-center mt-3 w-full">
							{errors["schoolTypes"] &&
								(errors["schoolTypes"]?.message as string)}
						</small>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between max-w-[540px] mx-auto">
				<NavButton onClick={() => setCurrentPage(1)} action="back" />
				<NavButton action="next" />
			</div>
		</form>
	);
};

export default FormTwo;
