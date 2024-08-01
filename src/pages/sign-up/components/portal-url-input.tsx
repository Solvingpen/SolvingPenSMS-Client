import type {
	FieldErrors,
	FieldValues,
	UseFormRegister
} from "react-hook-form";

/** Input for setting custom school portal URL */
const PortalUrlInput = ({
	register,
	errors
}: {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
}) => {
	const errorClasses = "border-red-400 bg-red-100";
	const validClasses = "border-[#8B8181]";

	return (
		<div className="flex flex-col gap-1 max-w-full">
			<label htmlFor="portal-url">Portal URL</label>
			<div
				className={`${
					errors && errors["portalUrl"] ? errorClasses : validClasses
				}bg-[#D9D9D9] flex items-stretch border border-[#8B8181] rounded-md overflow-hidden`}>
				<label
					className="text-[#6C757D] p-2 whitespace-nowrap text-[15.13px] flex-1"
					htmlFor="portal-url">
					https://solvingpenschools.com/
				</label>
				<input
					id="portal-url"
					className={`${
						errors && errors["portalUrl"]
							? errorClasses
							: validClasses
					} p-2 flex-1 min-w-0 outline-none`}
					type="text"
					{...register("portalUrl", {
						required: {
							value: true,
							message: "You have to set your portal link"
						},
						max: {
							value: 64,
							message: "Your portal link is too long"
						},
						min: {
							value: 6,
							message: "Your portal link is too short"
						},
						pattern: {
							value: /^[A-Za-z0-9\-]{6,64}$/,
							message:
								"Your portal link may only contain the following: letters, numbers, hyphens"
						}
					})}
				/>
			</div>
			<small className="text-red-600 text-[12px]">
				{errors &&
					errors["portalUrl"] &&
					(errors["portalUrl"]?.message as string)}
			</small>
		</div>
	);
};

export default PortalUrlInput;
