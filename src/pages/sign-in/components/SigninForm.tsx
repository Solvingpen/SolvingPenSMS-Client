import { Link } from "react-router-dom";
import Input from "../../../components/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Signin from "..";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../../components/checkbox";

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
    const { name, value, type, checked } = e.target;
    const inputvalue = type === 'checkbox' ? checked : value
    setFormData((prev) => ({
      ...prev,
      [name]: inputvalue,
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
          <Checkbox
            id={"reminder"}
            label={"Remind me of my password when am here"}
            name={"reminder"}
            register={register}
            onChange={handleChange}
          />
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
            className="text-sm inline-flex bg-[#6C757D] px-6 py-2 rounded-[6px] disabled:cursor-not-allowed disabled:opacity-70 text-[#F7F9FA] "
          >
            BACK
          </Link>
          <button className="text-sm inline-flex bg-[#007BFF] px-6 py-2 rounded-[6px] disabled:cursor-not-allowed disabled:opacity-70 text-[#F7F9FA]">
            LOGIN
          </button>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
