import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const HeaderProfile = () => {
  return (
    <header className="bg-white flex flex-row-reverse items-center p-3 ">
      <NavLink to="/userProfile" className="flex items-center gap-2">
        <img
          src="/assets/profile.jpg"
          alt="profileImg"
          className="w-10 h-10 rounded-full "
        />
        <span> روان سليمه </span>
      </NavLink>
      <div className="text-2xl text-gray ml-3 cursor-pointer">
        {" "}
        <FaBell />{" "}
      </div>
    </header>
  );
};

export default HeaderProfile;
