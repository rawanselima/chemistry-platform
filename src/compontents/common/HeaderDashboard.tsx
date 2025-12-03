import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { SidebarTrigger } from "@/components/ui/sidebar";

const HeaderDashboard = () => {
  return (
    <header className="bg-white flex justify-between items-center p-3 ">
      <SidebarTrigger className="sidebar-trigger px-7 cursor-pointer text-right text-gray" />

      <div className="flex flex-row-reverse items-center">
        <NavLink to="/userProfile" className="flex items-center gap-2">
          <img
            src="/assets/profile.jpg"
            alt="profileImg"
            className="w-10 h-10 rounded-full "
          />
          <span> روان سليمه </span>
        </NavLink>
        <div className="text-2xl text-gray ml-3 cursor-pointer">
          <FaBell />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
