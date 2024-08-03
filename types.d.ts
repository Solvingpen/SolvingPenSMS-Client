import type { InputHTMLAttributes, HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
	type: HTMLInputTypeAttribute;
	id: string;
	label: string;
	name: string;
	errorMessages?: {
		empty?: string;
		invalid?: string;
		tooShort?: string;
		tooLong?: string;
		max?: string;
		min?: string;
	};
	register?: UseFormRegister<FieldValues>;
	errors?: FieldErrors<FieldValues>;
	pattern?: string;
}

export interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type"> {
	id: string;
	label: string;
	name: string;
	register?: UseFormRegister<FieldValues>;
	errors?: FieldErrors<FieldValues>;
}
