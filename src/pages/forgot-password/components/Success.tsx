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
          <div className="h-[306px] bg-[#197EAB] flex flex-col gap-5 justify-center items-center rounded-t-lg">
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
              className="text-white bg-[#197EAB] px-5 py-3 text-center rounded-lg lg:w-[193px] md:w-[193px] w-100 mb-3"
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
