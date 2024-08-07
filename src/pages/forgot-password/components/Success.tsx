import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div className="">
        <h2 className="text-xl pb-20 text-center">
          Password Changed Successfully
        </h2>
        <div className="lg:w-[368px] md:w-[368px] flex flex-col m-auto w-100 ">
          <div className="h-[250px] bg-[#197EAB] flex flex-col gap-5 justify-center items-center rounded-t-lg">
            <div className="w-[49px] h-[49px] bg-[#E7E7E7] rounded-full flex flex-col items-center justify-center">
              <BiCheck className="text-[#197EAB] size-20" />
            </div>
            <p className="text-white text-center">Successful</p>
          </div>
          <div className="h-[137px] bg-[#D9D9D9] flex flex-col gap-3 text-center items-center justify-center rounded-b-lg p-2">
            <p className="">
              Congratulations, Your account Password has been changed
              successfully
            </p>
            <Link
              to={"/sign-in"}
              className="text-sm inline-flex bg-[#007BFF] px-6 py-2 rounded-[6px] disabled:cursor-not-allowed disabled:opacity-70 text-[#F7F9FA]"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
