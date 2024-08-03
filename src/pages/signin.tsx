import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="w-full min-h-screen p-7">
      <div className="min-h-screen bg-[#F7F9FA] flex flex-col items-center justify-center rounded shadow-2xl shadow-slate-200 p-2">
        <h1 className="py-5 lg:text-4xl md:text-2xl  sm:text-sm text-center">
          Sign in to Saint John School Portal
        </h1>
        <form className="w-100">
          <div className="grid mb-3">
            <label htmlFor="login" className="mb-2">
              Login As
            </label>
            <input
              type="text"
              id="login"
              placeholder="Select User Account"
              className="border border-black   outline-none px-2 py-2 rounded-md"
            />
          </div>
          <div className="grid mb-3">
            <label htmlFor="username" className="mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username ID"
              className="border border-black  outline-none px-2 py-2 rounded-md"
            />
          </div>
          <div className="grid mb-3">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-black  outline-none px-2 py-2 rounded-md"
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" className=" w-[40px] h-[40px]" />
            <label htmlFor="">Remind me of my password when am here</label>
          </div>
          <div className="mb-3">
            <p>
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
              className="text-white bg-[#6C757D] px-5 py-3 text-center rounded-lg w-[100px] lg:w-50"
            >
              BACK
            </Link>
            <button className="text-white bg-[#007BFF] px-5 py-3 rounded-lg text-center w-[100px] lg:w-50">
              LOGIN
            </button>
          </div>
        </form>
        <p className="text-xs sm:text-sm lg:text-xl md:text-xl">
          Contact Support: Schoolname@gmail.com
        </p>
        <p className="text-xs sm:text-sm lg:text-xl md:text-xl">
          School Phone: 08065005323
        </p>
      </div>
    </div>
  );
};

export default Signin;
