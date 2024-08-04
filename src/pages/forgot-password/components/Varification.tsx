import { SubmitHandler, useForm } from "react-hook-form";
import { Status } from "..";

interface Otp {
  num1: "";
  num2: "";
  num3: "";
  num4: "";
  num5: "";
}

interface Prop {
  setAction: React.Dispatch<React.SetStateAction<Status>>;
}
const Varification = ({ setAction }: Prop) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: {},
  } = useForm<Otp>();

  const onSubmit: SubmitHandler<Otp> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      setAction("resetPassword");
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "This email has already been taken",
      });
    } finally {
      reset();
    }
  };
  return (
    <>
      <div className="w-100">
        <h2 className="text-xl pb-20 text-center">Check your email</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-[360px] md:w-[360px] w-100 flex flex-col justify-center items-center m-auto py-5"
        >
          <p className="text-center  pb-5">
            We sent a reset link to contact@chrisnwas.com enter 5 degit code
            that mentioned in the email
          </p>
          <div className="flex items-center justify-center gap-5">
            <input
              type="text"
              id="num-1"
              maxLength={1}
              {...register("num1", {})}
              className="lg:w-[56px] md:w-[56px] lg:h-[56px] text-center md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
            />
            <input
              type="text"
              maxLength={1}
              id=""
              {...register("num2", {})}
              className="lg:w-[56px] md:w-[56px] lg:h-[56px] text-center md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
            />
            <input
              type="text"
              maxLength={1}
              id=""
              {...register("num3", {})}
              className="lg:w-[56px] md:w-[56px] lg:h-[56px] text-center md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
            />
            <input
              type="text"
              maxLength={1}
              id=""
              {...register("num4", {})}
              className="lg:w-[56px] md:w-[56px] lg:h-[56px] text-center md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
            />
            <input
              type="text"
              maxLength={1}
              id=""
              {...register("num5", {})}
              className="lg:w-[56px] md:w-[56px] lg:h-[56px] text-center md:h-[56px] w-[36px] h-[36px] bg-[#F7F9FA]] border border-black outline-none px-2 py-2  rounded-md"
            />
          </div>
          <button className="text-white text-sm bg-[#007BFF] px-5 py-3 rounded-lg w-[100px] mt-10">
            RESET
          </button>
          <div className="flex items-center gap-2 pt-5 text-sm">
            <p> Haven't got the email yet?</p>
            <button className="text-[#007BFF] hover:underline ">
              Resend email
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Varification;
