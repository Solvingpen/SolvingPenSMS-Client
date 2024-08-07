import { useForm } from "react-hook-form";
import Input from "../../../components/input";
import { Status } from "..";
import { useState } from "react";

interface Reset {
  password: "";
  newPassword: "";
}

interface Prop {
  setAction: React.Dispatch<React.SetStateAction<Status>>;
}
const Resetpassword = ({ setAction }: Prop) => {
  const [resetPassword, setResetPassword] = useState<Reset>({} as Reset);

  const {
    register,
    handleSubmit, getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const onSubmit = async () => {
    try {
      if (isValid) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(resetPassword);
        setAction("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-100 flex flex-col justify-center ">
        <h2 className="text-xl pb-20 text-center">Set a new password</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col lg:w-[360px] md:w-[360px] w-100 m-auto gap-8 py-5"
        >
          <p className="text-center ">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
          <div className="grid  gap-3">
            <Input
              autoComplete="new-password"
              errors={errors}
              register={register}
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              errorMessages={{
                invalid:
                  "No spacing in password. Password must be at least six characters long",
                empty: "Password cannot be empty",
              }}
              pattern={RegExp(/^[^\s]{6,}$/) as unknown as string}
              required
            />
          </div>
          <div className="grid gap-3">
            <Input
              autoComplete="new-password"
              errors={errors}
              register={register}
              id="password"
              name="newPassword"
              label="Confirm Password"
              type="password"
              onChange={handleChange}
              errorMessages={{
                invalid:
                  "No spacing in password. Password must be at least six characters long",
                empty: "Password cannot be empty",
                mismatch: "Password do not match",
              }}
              validate={{
                validate: (value: any) =>
                  value === getValues("password") || "Passwords do not match",
              }}
              pattern={RegExp(/^[^\s]{6,}$/) as unknown as string}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="text-sm inline-flex bg-[#007BFF] px-6 py-2 rounded-[6px] disabled:cursor-not-allowed disabled:opacity-70 text-[#F7F9FA]">
              UPDATE PASSWORD
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;
