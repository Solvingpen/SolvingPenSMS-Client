import { useState } from "react";
import { InputProps } from "../../types.d";
import { GoEye, GoEyeClosed } from "react-icons/go";

/** Input component to be used throughout the application */
const Input = ({
  id,
  label,
  required,
  disabled,
  name,
  type,
  max,
  errorMessages,
  min,
  minLength,
  maxLength,
  register,
  errors,
  pattern,
  ...rest
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const errorClasses = "border-red-400 bg-red-100";
  const validClasses = "border-[#8B8181]";

  switch (type) {
    case "password":
      return (
        <div className="flex flex-col gap-1">
          <label className="text-sm flex-1" htmlFor={id}>
            {label}
          </label>
          <div
            className={`${
              errors && errors[name] ? errorClasses : validClasses
            } flex items-stretch rounded-md border overflow-hidden`}
          >
            {register ? (
              <input
                {...rest}
                className={`${
                  errors && errors[name] ? errorClasses : validClasses
                } placeholder:text-sm disabled:opacity-70 disabled:cursor-not-allowed min-w-0 p-1 outline-none focus:outline-none flex-1`}
                type={isPasswordVisible ? "text" : "password"}
                {...register(name, {
                  required: {
                    value: required || false,
                    message: errorMessages?.empty || "",
                  },
                  disabled: disabled || false,
                  max: {
                    value: max as string,
                    message:
                      errorMessages?.max ||
                      `The maximum value can only be ${max}`,
                  },
                  min: {
                    value: min as string,
                    message:
                      errorMessages?.min ||
                      `The minimum value can only be ${min}`,
                  },
                  pattern: {
                    value: RegExp(pattern as string),
                    message: errorMessages?.invalid as string,
                  },
                })}
              />
            ) : (
              <input
                {...rest}
                className={`${validClasses} placeholder:text-sm disabled:opacity-70 disabled:cursor-not-allowed min-w-0 p-1 outline-none focus:outline-none flex-1`}
                type={isPasswordVisible ? "text" : "password"}
              />
            )}
            <button
              className="bg-green-600 text-white px-4 py-2"
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <GoEyeClosed /> : <GoEye />}
            </button>
          </div>
          <small className="text-red-600 text-[12px]">
            {errors && errors[name] && (errors[name]?.message as string)}
          </small>
        </div>
      );
    default:
      return (
        <div className="flex flex-col gap-1">
          <label className="text-sm flex-1" htmlFor={id}>
            {label}
          </label>
          {register ? (
            <input
              {...rest}
              className={`${
                errors && errors[name] ? errorClasses : validClasses
              } placeholder:text-sm disabled:opacity-70 disabled:cursor-not-allowed min-w-0 p-1 rounded-md border outline-none focus:outline-none`}
              type={type}
              {...register(name, {
                required: {
                  value: required || false,
                  message: errorMessages?.empty || "",
                },
                disabled: disabled || false,
                max: {
                  value: max as string,
                  message:
                    errorMessages?.max ||
                    `The maximum value can only be ${max}`,
                },
                min: {
                  value: min as string,
                  message:
                    errorMessages?.min ||
                    `The minimum value can only be ${min}`,
                },
                pattern: {
                  value: RegExp(pattern as string),
                  message: errorMessages?.invalid as string,
                },
              })}
            />
          ) : (
            <input
              {...rest}
              className={`${
                errors && errors[name] ? errorClasses : validClasses
              } placeholder:text-sm disabled:opacity-70 disabled:cursor-not-allowed min-w-0 p-1 rounded-md border outline-none focus:outline-none`}
              type={type}
            />
          )}
          <small className="text-red-600 text-[12px]">
            {errors && errors[name] && (errors[name]?.message as string)}
          </small>
        </div>
      );
  }
};

export default Input;
