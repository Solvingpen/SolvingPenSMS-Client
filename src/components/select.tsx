import { useEffect, useState } from "react";
import { SelectProps } from "../../types";

const Select = ({
	defaultValue,
	id,
	label,
	name,
	options,
	errors,
	register,
	onBlur,
	onFocus,
	errorMessages,
	...rest
}: SelectProps) => {
	const [selectedValue, setSelectedValue] = useState<string>(
		defaultValue || ""
	);
	const [filteredOptions, setFilteredOptions] =
		useState<typeof options>(options);
	const errorClasses = "border-red-400 bg-red-100";
	const validClasses = "border-[#8B8181]";
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

	useEffect(() => {
		setFilteredOptions(() =>
			options.filter(option =>
				option.value.toLowerCase().includes(selectedValue.toLowerCase())
			)
		);
	}, [selectedValue]);

	return (
		<div className="text-sm relative">
			<div className="flex flex-col gap-1">
				<label htmlFor={id}>{label}</label>
				{register ? (
					<input
						onFocus={() => setShowSuggestions(true)}
						{...register(name, {
							pattern: {
								value: /[\w]+/,
								message:
									errorMessages?.empty ||
									`${name} cannot be empty`
							},
							onBlur(e) {
								setTimeout(() => {
									const { value } = e.target;

									const selectedValueIsNotOption = !Boolean(
										options.find(
											option =>
												option.value.toLowerCase() ===
												value.toLowerCase()
										)
									);

									setShowSuggestions(false);

									if (selectedValueIsNotOption) {
										setSelectedValue(
											filteredOptions[0]?.value
										);
									}
								}, 700);
								onBlur && onBlur(e);
							}
						})}
						onChange={({ target }) => {
							const { value } = target;

							setSelectedValue(value);
						}}
						autoComplete="off"
						{...rest}
						id={id}
						className={`${
							errors && errors[name] ? errorClasses : validClasses
						} placeholder:text-sm min-w-0 p-1 rounded-md border outline-none focus:outline-none`}
						value={selectedValue}
						{...rest}
						type="text"
						defaultValue={defaultValue}
					/>
				) : (
					<input
						onFocus={() => setShowSuggestions(true)}
						onBlur={e => {
							setTimeout(() => {
								const { value } = e.target;

								const selectedValueIsNotOption = !Boolean(
									options.find(
										option =>
											option.value.toLowerCase() ===
											value.toLowerCase()
									)
								);

								setShowSuggestions(false);

								if (selectedValueIsNotOption) {
									setSelectedValue(filteredOptions[0]?.value);
								}
							}, 700);
						}}
						onChange={({ target }) => {
							const { value } = target;

							setSelectedValue(value);
						}}
						autoComplete="off"
						{...rest}
						id={id}
						name={name}
						className={`${validClasses} placeholder:text-sm min-w-0 p-1 rounded-md border outline-none focus:outline-none`}
						value={selectedValue}
						{...rest}
						type="text"
						defaultValue={defaultValue}
					/>
				)}
				<small className="text-red-600 text-[12px]">
					{errors &&
						errors[name] &&
						(errors[name]?.message as string)}
				</small>
			</div>
			{showSuggestions && (
				<div className="absolute top-full w-full bg-white shadow-md rounded-md overflow-x-hidden max-h-[176px] overflow-y-auto">
					{filteredOptions.map(option => (
						<button
							onClick={() => setSelectedValue(option.value)}
							key={option.value}
							className="p-2 block w-full hover:bg-blue-600 hover:text-white text-left"
							type="button">
							{option.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
