import { Link } from "react-router-dom";
import Input from "../../../components/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Signin from "..";
import { useNavigate } from "react-router-dom";

interface Signin {
  login: "";
  username: "";
  password: "";
}

const SigninForm = () => {
  const [formData, setFormData] = useState<Signin>({} as Signin);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      if (isValid) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(formData);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-[320px] md:w-[320px] w-100 m-auto"
      >
        <div className=" mb-3">
          <Input
            autoComplete=""
            errors={errors}
            register={register}
            placeholder="Select User Account"
            id="login"
            name="login"
            label="Login As"
            type="text"
            onChange={handleChange}
            errorMessages={{
              invalid: "Use a valid first name",
              empty: "Login As cannot be empty",
            }}
            pattern={RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+$/) as unknown as string}
            required
          />
        </div>
        <div className=" mb-3">
          <Input
            autoComplete=""
            errors={errors}
            register={register}
            id="username"
            name="username"
            label="Username"
            placeholder="Username"
            onChange={handleChange}
            type="text"
            errorMessages={{
              invalid: "Use a valid first name",
              empty: "username cannot be empty",
            }}
            pattern={RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+$/) as unknown as string}
            required
          />
        </div>
        <div className="mb-3">
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
        <div className="flex items-center gap-2 mb-3">
          <input type="checkbox" className=" w-[40px] h-[40px]" />
          <label htmlFor="" className="text-sm">
            Remind me of my password when am here
          </label>
        </div>
        <div className="mb-3">
          <p className="text-sm">
            Forgot password? click{" "}
            <Link
              to={"/forgot-password"}
              className="text-[#007BFF] hover:underline"
            >
              here
            </Link>
          </p>
        </div>
        <div className="flex justify-between mb-3">
          <Link
            to={"/"}
            className="text-white text-sm bg-[#6C757D] px-5 py-3 text-center rounded-lg w-[100px] lg:w-50"
          >
            BACK
          </Link>
          <button className="text-white text-sm bg-[#007BFF] px-5 py-3 rounded-lg text-center w-[100px] lg:w-50">
            LOGIN
          </button>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
