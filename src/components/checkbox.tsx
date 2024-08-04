import { CheckboxProps } from "../../types";

const Checkbox = ({
	id,
	label,
	name,
	register,
	errors,
	required,
	...rest
}: CheckboxProps) => {
	return (
		<div className="flex gap-1 accent-[#007BFF] items-center">
			{register ? (
				<input
					type="checkbox"
					{...register(name, {
						required
					})}
					id={id}
					{...rest}
					className={`${
						errors && errors[name] && "accent-red-500 animate-ping"
					}`}
				/>
			) : (
				<input name={name} type="checkbox" id={id} {...rest} />
			)}
			<label
				className={`${
					errors && errors[name] && "text-red-500 animate-pulse"
				}`}
				htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
