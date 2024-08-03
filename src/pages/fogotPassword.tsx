import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

export type Status =
  | "forgotPassword"
  | "varification"
  | "resetPassword"
  | "success";

const fogotPassword = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
  const [action, setAction] = useState<Status>("forgotPassword");
  return (
    <div className="w-full min-h-screen p-7">
      <div className="min-h-[659px] bg-[#F7F9FA] rounded shadow-2xl shadow-lg p-2">
        <h1 className="lg:pt-5 lg:pl-5 lg:pb-3 md:pt-5 md:pl-5 md:pb-3 pl-0 pb-4  font-bold text-xl">
          Forgot password
        </h1>
        <div>
          {action === "forgotPassword" && (
            <div className=" lg:w-[364px] md:w-[364px] w-100 flex flex-col m-auto justify-center">
              <p className="text-xl pb-20 text-center">Forgot password</p>
              <form className="">
                <div className="grid gap-3 pb-20">
                  <label htmlFor="email">
                    Enter your email to reset password
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="example@gmai.com"
                    className="border border-black outline-none px-2 py-2  rounded-md"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-[40px] h-[40px]" />
                    <label htmlFor="">Email Valid</label>
                  </div>
                  <button className="text-white bg-[#007BFF] px-5 py-3 rounded-lg w-[100px]">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          )}

          {action === "varification" && (
            <div className="lg:w-[364px] md:w-[364px] w-100">
              <h2 className="text-xl pb-20 text-center">Check your email</h2>
              <p className="text-center ">
                We sent a reset link to contact@chrisnwas.com enter 5 degit code
                that mentioned in the email
              </p>
              <form className="flex flex-col items-center justify-center  py-10">
                <div className="flex gap-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="lg:w-[56px] md:w-[56px] lg:h-[56px] md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="lg:w-[56px] md:w-[56px] lg:h-[56px] md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="lg:w-[56px] md:w-[56px] lg:h-[56px] md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="lg:w-[56px] md:w-[56px] lg:h-[56px] md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="lg:w-[56px] md:w-[56px] lg:h-[56px] md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
                  />
                </div>
                <button className="text-white bg-[#007BFF] px-5 py-3 rounded-lg w-[100px] mt-10">
                  RESET
                </button>
                <div className="flex items-center gap-2 pt-5">
                  <p> Haven't got the email yet?</p>
                  <button className="text-[#007BFF] hover:underline ">
                    Resend email
                  </button>
                </div>
              </form>
            </div>
          )}

          {action === "resetPassword" && (
            <div className="lg:w-[364px] md:w-[364px] w-100 flex flex-col  justify-center ">
              <h2 className="text-xl pb-20 text-center">Set a new password</h2>
              <p className="text-center ">
                Create a new password. Ensure it differs from previous ones for
                security
              </p>
              <form className=" flex flex-col  gap-8 py-8">
                <div className="grid  gap-3">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className=" w-100 border border-black outline-none p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-3">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    className=" w-100 border border-black outline-none p-2 rounded-md"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button className="text-white bg-[#007BFF] px-5 py-3 text-center rounded-lg w-[198px] mt-10">
                    UPDATE PASSWORD
                  </button>
                </div>
              </form>
            </div>
          )}
          {action === "success" && (
            <div className="">
              <h2 className="text-xl pb-20 text-center">
                Password Changed Successfully
              </h2>
              <div className="lg:w-[363px] md:w-[363px] w-100 border border-black rounded-lg">
                <div className="h-[306px] bg-[#197EAB] flex flex-col gap-5 justify-center items-center">
                  <div className="w-[49px] h-[49px] bg-[#E7E7E7] rounded-full flex flex-col items-center justify-center">
                    <BiCheck className="text-[#197EAB] size-20" />
                  </div>
                  <p className="text-white text-center">Successful</p>
                </div>
                <div className="h-[137px] bg-[#D9D9D9] flex flex-col gap-3 text-center   items-center  justify-center">
                  <p className="px-2">
                    Congratulations, Your account Password has been changed
                    successfully
                  </p>
                  <Link
                    to={"/sign-in"}
                    className="text-white bg-[#197EAB] px-5 py-3 text-center rounded-lg lg:w-[193px] md:w-[193px] w-100 mb-3"
                  >
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center pt-20">
          <p className="text-xs sm:text-sm lg:text-xl md:text-xl">
            Contact Support: Schoolname@gmail.com
          </p>
          <p className="text-xs sm:text-sm lg:text-xl md:text-xl">
            School Phone: 08065005323
          </p>
        </div>
      </div>
    </div>
  );
};

export default fogotPassword;
