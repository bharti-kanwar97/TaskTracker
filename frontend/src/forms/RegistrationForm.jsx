import { useEffect } from "react";
import { Link} from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";

import useRegisterData from '../hooks/useRegisterData.js'

export default function RegistrationForm() {
   const {onSubmit,register,handleSubmit,setFocus,errors}=useRegisterData();
  


  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

 

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 shadow-lg/60 dark:bg-[#0B1223]">
        <div className="min-w-[320px] w-[800px] max-w-[1200px] flex shadow-lg/60 rounded-lg px-6 py-4  xs:px-10 xs:py-6 md:px-20 md:py-15 mx-4 border-1 border-gray-200 dark:border-gray-600 dark:bg-[#0F172A]">
          <div className="w-full ">
            <div className="text-center py-6">
              <h1 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-black dark:text-white">
                Create your account
              </h1>
              <h2 className="text-[13px] md:text-[14px] lg:text-[16px] text-gray-600 dark:text-neutral-200">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline hover:underline-offset-5 hover:decoration-blue-600 hover:dark:decoration-blue-400 font-semibold">
                  {" "}
                  Log in
                </Link>
              </h2>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="pb-2 md:pb-3 lg:pb-4 w-full">
                  <label
                    htmlFor=""
                    className="text-[13px] md:text-[14px] lg:text-[16px] text-blue-950 font-semibold dark:text-neutral-100"
                  >
                    Username
                  </label>
                  <div className="group relative pt-1">
                    <input 
                      type="text"
                      name="name"
                      id=""
                    {...register('name')}
                      placeholder="Enter your username"
                      className="border-2 border-gray-400 rounded-lg my-0.3 md:-0.4 lg:0.8 placeholder:text-zinc-600 placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[14px] pl-10 pr-4 py-2 focus:outline-none focus:!border-blue-950 w-full text-[13px] md:text-[14px] lg:text-[15px] placeholder:font-medium text-black dark:text-white dark:placeholder:text-zinc-200 dark:focus:!border-blue-400 "
                    />
                    <FiUser className="group-focus-within:text-blue-950 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 text-[20px] dark:group-focus-within:text-blue-400" />
                  </div>
                      {errors.name && (
  <p className="text-red-500 text-sm">
    {errors.name.message}
  </p>
)}
                </div>
                <div className="pb-2 md:pb-3 lg:pb-4 w-full">
                  <label
                    htmlFor=""
                    className="text-[13px] md:text-[14px] lg:text-[16px] text-blue-950 font-semibold dark:text-neutral-100"
                  >
                    Email
                  </label>
                  <div className="group relative py-1">
                    <input
                      type="email"
                      name="email"
                      id=""
                     {...register('email')}
                      placeholder="Enter your email address"
                      className="border-2 border-gray-400 rounded-lg my-0.3 md:-0.4 lg:0.8 placeholder:text-zinc-600 placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[14px] pl-10 pr-4 py-2 focus:outline-none focus:!border-blue-950 w-full text-[13px] md:text-[14px] lg:text-[15px] placeholder:font-medium text-black dark:text-white dark:placeholder:text-zinc-200 dark:focus:!border-blue-400 "
                    />
                    <MdOutlineMail className="group-focus-within:text-blue-950 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 text-[20px] dark:group-focus-within:text-blue-400" />
                  </div>
                          {errors.email && (
  <p className="text-red-500 text-sm">
    {errors.email.message}
  </p>
)}
                </div>
                <div className="pb-2 md:pb-3 lg:pb-4 w-full">
                  <label
                    htmlFor=""
                    className="text-[13px] md:text-[14px] lg:text-[16px] text-blue-950 font-semibold dark:text-neutral-100"
                  >
                    Password
                  </label>
                  <div className="group relative py-1">
                    <input
                      type="password"
                      name="password"
                      id=""
                    {...register('password')}
                      placeholder="Enter your password"
                      className="border-2 border-gray-400 rounded-lg my-0.3 md:-0.4 lg:0.8 placeholder:text-zinc-600 placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[14px] pl-10 pr-4 py-2 focus:outline-none focus:!border-blue-950 w-full text-[13px] md:text-[14px] lg:text-[15px] placeholder:font-medium text-black dark:text-white dark:placeholder:text-zinc-200 dark:focus:!border-blue-400 "
                    />
                    <RiLockPasswordLine className="group-focus-within:text-blue-950 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 text-[20px] dark:group-focus-within:text-blue-400" />
                    <LuEye className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 text-[20px] dark:group-focus-within:text-blue-400" />
                  </div>
                        {errors.password && (
  <p className="text-red-500 text-sm">
    {errors.password.message}
  </p>
)}
                </div>
                <div className="pb-2 md:pb-3 lg:pb-4 w-full">
                  <label
                    htmlFor=""
                    className="text-[13px] md:text-[14px] lg:text-[16px] text-blue-950 font-semibold dark:text-neutral-100"
                  >
                    Confirm Password
                  </label>
                  <div className="group relative py-1">
                    <input
                      type="password"
                      name="confirmPassword"
                      id=""
                      {...register('confirmPassword')}
                      placeholder="Confirm your password"
                      className="border-2 border-gray-400 rounded-lg my-0.3 placeholder:text-zinc-600 placeholder:text-[12px] placeholder:md:text-[13px] placeholder:lg:text-[14px] pl-10 pr-4 py-2 focus:outline-none focus:!border-blue-950 w-full text-[13px] md:text-[14px] lg:text-[15px] placeholder:font-medium text-black dark:text-white dark:placeholder:text-zinc-200 dark:focus:!border-blue-400 "
                    />
                    <RiLockPasswordLine className="group-focus-within:text-blue-950 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 text-[20px] dark:group-focus-within:text-blue-400" />
                    <LuEye className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 text-[20px] dark:group-focus-within:text-blue-400" />
                  </div>
                     {errors.confirmPassword && (
  <p className="text-red-500 text-sm">
    {errors.confirmPassword.message}
  </p>
)}
                </div>
                <div className="py-6 md:py-8 lg:py-10 text-center w-full">
                  <button
                    type="submit"
                    className="bg-[#1A4560] text-white rounded-lg py-2 w-full !transition-none !transform-none text-[14px] md:text-[18px] lg:text-[20px] font-semibold dark:border-1 dark:border-zinc-600 dark:bg-transparent dark:rounded-[80px] hover:dark:bg-[#15213b] cursor-pointer"
                  >
                    Sign up
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
