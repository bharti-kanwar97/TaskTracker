import React from 'react'
import { Link } from 'react-router-dom'
function CTASection() {
  return (
    <>
      <section className=" py-10 px-6 sm:px-15 dark:bg-[#0B1223]">
          <div className="flex sm:flex-row flex-col justify-between px-3 md:px-4 lg:px-15 items-center max-w-[1300px] mx-auto md:mt-10 lg:mt-20 bg-gray-200 py-4 rounded-lg dark:bg-[#0F172A]">
            <div className="w-full sm:w-1/2 pb-4 sm:pb-0 text-center sm:text-left">
              <h2 className="font-bold text-[14px] md:text-[16px] lg:text-[18px] md:leading-8 lg:leading-10">
                Ready to boost your productivity?
              </h2>
              <h3 className="font-medium text-[12px] md:text-[14px] lg:text-[15px] text-gray-600 dark:text-gray-400  md:leading-5 lg:leading-5">
                Join thousands of users who trust Task Manager to get things
                done.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="px-4 py-1.5 sm:px-6 sm:py-3 rounded-lg text-white bg-[#1A4560] hover:bg-[#113145] dark:bg-[#163e9c] hover:dark:bg-transparent hover:dark:border-[#163e9c] dark:border-2 dark:border-[#163e9c]"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="border-2 px-4 py-1.5 sm:px-6 sm:py-3 rounded-lg border-[#255574] text-[#1A4560] dark:text-neutral-100 dark:border-[#163e9c] hover:dark:text-white hover:dark:bg-[#163e9c] hover:dark:border-[#163e9c]"
              >
                Log in
              </Link>
            </div>
          </div>
        </section>
    </>
  )
}

export default CTASection
