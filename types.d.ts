import type { InputHTMLAttributes, HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues, UseFormGetFieldState, UseFormGetValues, UseFormRegister } from "react-hook-form";

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
    mismatch?: string;
  };
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  pattern?: string;
  validate?: RegisterOptions["validate"];
}

export interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type"> {
	id: string;
	label: string;
	name: string;
	register?: UseFormRegister<FieldValues>;
	errors?: FieldErrors<FieldValues>;
}

export interface SelectProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type"> {
	id: string;
	label: string;
	name: string;
	options: { label: string; value: string }[];
	max?: number;
	min?: number;
	register?: UseFormRegister<FieldValues>;
	errors?: FieldErrors<FieldValues>;
	defaultValue?: string;
	errorMessages?: {
		empty?: string;
	};
}
