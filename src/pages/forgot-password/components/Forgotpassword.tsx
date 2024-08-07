import { useForm } from "react-hook-form";
import Input from "../../../components/input";
import { Status } from "..";
import { useState } from "react";
import Checkbox from "../../../components/checkbox";

interface Email {
  email: "";
  verify: false;
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
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value
    setUserEmail((prev) => ({
      ...prev,
      [name]: inputValue,
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
            {/* <div className="flex items-center gap-3">
              <input type="checkbox" className="w-[40px] h-[40px]" />
              <label htmlFor="" className="text-sm">
                Email Valid
              </label>
            </div> */}
            <Checkbox id={"email"} label={"Email Valid"} name={"verify"} register={register}/>
            <button className="text-sm inline-flex bg-[#007BFF] px-6 py-2 rounded-[6px] disabled:cursor-not-allowed disabled:opacity-70 text-[#F7F9FA]">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forgotpassword;
