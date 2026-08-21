import {useEffect} from "react";
import { Link} from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";
import useLoginUser from "../hooks/useLoginUser";


export default function LoginForm() {
   const {onSubmit,register,handleSubmit,setFocus,errors} = useLoginUser();


  
   useEffect(() => {
    setFocus('email');
  
   },[setFocus]);
  

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 shadow-lg/60 dark:bg-[#0B1223]">
        <div className="min-w-[320px] w-[800px] max-w-[1200px] flex shadow-lg/60 rounded-lg p-4   xs:px-10 xs:py-6 md:px-20 md:py-15 mx-4 border-1 border-neutral-200 dark:border-neutral-600 dark:bg-[#0F172A]">
          <div className="w-full ">
            <div className="text-center py-6">
              <h1 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-black dark:text-white">
                Welcome back👋{" "}
              </h1>
              <h2 className="text-[13px] md:text-[14px] lg:text-[16px] text-neutral-600 dark:text-neutral-200">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline hover:underline-offset-5 hover:decoration-blue-600 hover:dark:decoration-blue-400 font-semibold">
                  {" "}
                  Sign up
                </Link>
              </h2>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="pb-2 md:pb-3 lg:pb-4 w-full">
                  <label
                    htmlFor="email"
                    className="text-[13px] md:text-[14px] lg:text-[16px] text-blue-950 font-semibold dark:text-neutral-100"
                  >
                    Email
                  </label>
                  <div className="relative group py-1">
                    <input
                    //  ref={focusInput}
                    type="email"
                      name="email"
                      id="email"
                     {...register('email')}
                     placeholder="Enter your email address"
                      className="border-2 border-gray-400 rounded-lg my-0.3 md:my-0.4 lg:my-0.8 placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[14px] pl-10 pr-4 py-2 focus:outline-none focus:!border-blue-950 dark:focus:!border-blue-400 w-full text-[13px] md:text-[14px] lg:text-[15px] placeholder:font-medium placeholder:text-zinc-600 text-black dark:text-white dark:placeholder:text-zinc-200 dark:placeholder:bg-transparent"
                      />
               
                    <MdOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 dark:text-zinc-200 text-[20px]  group-focus-within:text-blue-950 dark:group-focus-within:text-blue-400  " />
                  </div>
                      {errors.email && (
  <p className="text-red-500 text-sm">
    {errors.email.message}
  </p>
)}
                </div>
                <div className="pb-2 md:pb-3 lg:pb-4 w-full">
                  <label
                    htmlFor="password"
                    className="text-[13px] md:text-[14px] lg:text-[16px] text-blue-950 dark:text-neutral-100 font-semibold"
                  >
                    Password
                  </label>
                  <div className="group relative py-1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      {...register('password')}
                      placeholder="Enter your password"
                      className="border-2 border-gray-400 rounded-lg my-0.3 md:my-0.4 lg:my-0.8 placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[14px] pl-10 pr-4 py-2 focus:outline-none dark:focus:!border-blue-400 focus:!border-blue-950 w-full text-[13px] md:text-[14px] lg:text-[15px] placeholder:font-medium placeholder:text-zinc-600 text-black dark:text-white dark:placeholder:text-zinc-200 dark:placeholder:bg-transparent"
                    />
                    <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 dark:text-zinc-200 text-[20px] group-focus-within:text-blue-950 dark:group-focus-within:text-blue-400" />
                    <LuEye className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-[20px]" />
                  </div>
          {errors.password && (
  <p className="text-red-500 text-sm">
    {errors.password.message}
  </p>
)}
                </div>
                <div className="py-6 md:py-7 lg:py-12 text-center w-full ">
                  <button
                    type="submit"
                    className="bg-[#1A4560] text-white rounded-lg py-2 w-full !transition-none !transform-none text-[14px] md:text-[18px] lg:text-[20px] font-semibold dark:border-1 dark:border-zinc-600 dark:bg-transparent dark:rounded-[80px] hover:dark:bg-[#15213b] cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
