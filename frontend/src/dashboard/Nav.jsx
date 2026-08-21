import {useState} from "react";
import ThemeButton from "../components/ThemeButton";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiPerspectiveDiceSixFacesFive } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
function Nav() {
  const [open,setOpen] = useState(false)
  return (
    <>
      <header className="">
        <nav className="relative flex justify-between items-center px-6 sm:px-20 py-4 sm:py-6 border-b-[1px]  border-gray-200 dark:border-neutral-700 ">
          <div>
            <h2 className="text-[#1A4560] dark:text-white  font-[600] text-[20px] sm:text-2xl">
              Task Tracker
            </h2>
          </div>
          <div className="lg:flex gap-4 hidden ">
            <div>
              <ThemeButton />
            </div>
            <div>
              <Link
                to="/login"
                className="border-2 px-6 py-3 rounded-lg border-[#255574] text-[#1A4560] dark:text-neutral-100 dark:border-[#163e9c] hover:dark:text-white hover:dark:bg-[#163e9c] hover:dark:border-[#163e9c]"
              >
                Log in
              </Link>
            </div>
            <div>
              <Link
                to="/register"
                className=" px-6 py-3 rounded-lg text-white bg-[#1A4560] hover:bg-[#113145] dark:bg-[#163e9c] hover:dark:bg-transparent hover:border-[#163e9c] dark:border-2 dark:border-[#163e9c]"
              >
                Sign up
              </Link>
            </div>
          </div>
        {open === false ? (<div onClick={() => setOpen(!open)}  className=" md:flex lg:hidden">
            <GiHamburgerMenu className="text-[18px] sm:text-2xl text-[#1A4560] dark:text-white" />
          </div> ) : (<div onClick={() => setOpen(!open)} className=" md:flex lg:hidden">
            <IoClose className="text-[18px] sm:text-2xl text-[#1A4560] dark:text-white" />
           
          </div>)  } 
         {open === true && (
          <div className="dark:bg-[#0F172A] bg-white h-screen w-[90%] absolute top-18 text-center py-5">
            <div className="dark:text-white text-black py-2"><Link to="/login">Login</Link></div>
            <div className="dark:text-white text-black py-2"><Link to="/register">Signup</Link></div>
            <div className=" py-2"><ThemeButton /></div>
          </div>
         )}
        </nav>
      </header>
    </>
  );
}

export default Nav;
