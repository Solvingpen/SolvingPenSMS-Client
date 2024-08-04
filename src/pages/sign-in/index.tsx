import ForgotPasswordFooter from "../forgot-password/components/ForgotPasswordFooter";
import SigninForm from "./components/SigninForm";

const Signin = () => {
  return (
    <div className="w-full min-h-screen p-7">
      <div className="bg-[#F7F9FA] shadow-lg py-8 px-4 rounded-sm w-full max-w-screen-sm space-y-6 m-auto">
        <h1 className="py-5 lg:text-4xl md:text-2xl  sm:text-sm text-center">
          Sign in to Saint John School Portal
        </h1>
        <SigninForm />
        <ForgotPasswordFooter />
      </div>
    </div>
  );
};

export default Signin;
