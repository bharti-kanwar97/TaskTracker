import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";;
import { useContext } from "react";
import SidebarContext from "../context/SidebarContext";
import { FiSidebar } from "react-icons/fi";
import CustomTooltip from "../components/Tooltip";
export default function Navbar() {
  const { sideBarOpen, setSideBarOpen } = useContext(SidebarContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/dashboard");
  };
  return (
    <div className="bg-white dark:bg-[#0B1223]">
      <nav className="py-0.5  relative">
        <div className="flex items-center justify-between">
          <CustomTooltip text="Open/Close sidebar">
            <div
              className={`mx-4 text-[20px] px-2.5 py-2.5 absolute top-4 text-[#1A4560] dark:text-[#4F46E5] flex sm:${sideBarOpen ? "hidden" : "flex"}`}
            >
              <FiSidebar
                onClick={() => {
                  setSideBarOpen(!sideBarOpen);
                  console.log(sideBarOpen);
                }}
              />{" "}
            </div>
          </CustomTooltip>
          <CustomTooltip text="Logout">
            <button
              onClick={handleLogout}
              className="hover:bg-amber-500 px-2.5 py-2.5 rounded-lg border-[#1A4560] text-[#1A4560] dark:text-[#4F46E5] dark:border:[#4F46E5] mx-4 text-[20px] absolute right-0 top-4"
            >
              <FiLogOut />
            </button>
          </CustomTooltip>
        </div>
      </nav>
    </div>
  );
}
