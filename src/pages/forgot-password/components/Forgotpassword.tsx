import { useForm } from "react-hook-form";
import Input from "../../../components/input";
import { Status } from "..";
import { useState } from "react";

interface Email {
  email: "";
}

interface Prop {
  setAction: React.Dispatch<React.SetStateAction<Status>>;
}

const Forgotpassword = ({ setAction }: Prop) => {
  const [userEmail, setUserEmail] = useState<Email>({} as Email);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      if (isValid) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(userEmail);
        setAction("varification");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-100 flex flex-col m-auto justify-center">
        <p className="text-xl pb-20 text-center">Forgot password</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-[320px] md:w-[320px] w-100 m-auto"
        >
          <div className="pb-20">
            <Input
              autoComplete="email"
              errors={errors}
              register={register}
              id="email"
              placeholder="email@provider.com"
              name="email"
              label="Enter your email to reset password"
              type="email"
              onChange={handlChange}
              errorMessages={{
                invalid: "Use a valid email",
                empty: "Email cannot be empty",
              }}
              pattern={
                RegExp(
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                ) as unknown as string
              }
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-[40px] h-[40px]" />
              <label htmlFor="" className="text-sm">
                Email Valid
              </label>
            </div>
            <button className="text-white text-sm bg-[#007BFF] px-5 py-3 rounded-lg w-[100px]">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forgotpassword;
