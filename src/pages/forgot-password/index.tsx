import { useState } from "react";
import Forgotpassword from "./components/Forgotpassword";
import Varification from "./components/Varification";
import Resetpassword from "./components/Resetpassword";
import Success from "./components/Success";
import ForgotPasswordFooter from "./components/ForgotPasswordFooter";
import SchoolNameHeader from "./components/SchoolNameHeader";

export type Status =
  | "forgotPassword"
  | "varification"
  | "resetPassword"
  | "success";

const ForgotPassword = () => {
  const [action, setAction] = useState<Status>("forgotPassword");

  return (
    <div className="w-full min-h-screen p-7">
      <SchoolNameHeader />
      <div className="bg-[#F7F9FA] shadow-lg py-8 px-4 rounded-sm w-full max-w-screen-sm space-y-6 m-auto">
        <h1 className="lg:pt-5 lg:pl-5 lg:pb-3 md:pt-5 md:pl-5 md:pb-3 pl-0 pb-4  font-bold text-xl">
          Forgot password
        </h1>
        <div>
          {action === "forgotPassword" && (
            <Forgotpassword setAction={setAction} />
          )}

          {action === "varification" && <Varification setAction={setAction} />}

          {action === "resetPassword" && (
            <Resetpassword setAction={setAction} />
          )}

          {action === "success" && <Success />}
        </div>
        <ForgotPasswordFooter />
      </div>
    </div>
  );
};

export default ForgotPassword;
