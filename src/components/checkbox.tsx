import { CheckboxProps } from "../../types";

const Checkbox = ({ id, label, ...rest }: CheckboxProps) => {
	return (
		<div className="flex gap-1 accent-[#007BFF] items-center">
			<input type="checkbox" id={id} {...rest} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default Checkbox;
