import { useState } from "react";
// components
import Logo from "../../components/Shared/Logo";
import MenuItem from "./MenuItem";
// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import HostMenu from "./HostMenu";
import GuestMenu from "./GuestMenu";
import AdminMenu from "./AdminMenu";
import ToggleBtn from "../../components/Button/ToggleBtn";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [role] = useRole();

  console.log("Role ----> ", role);

  // sideBar Responsive handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* small screan navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        {/* logo */}
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        {/* menuabr */}
        <button
          onClick={handleToggle}
          className="text-2xl p-4 hover:bg-yellow-300 rounded-full"
        >
          <GiHamburgerMenu className="h-5 w-5" />
        </button>
      </div>

      {/* sideBar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-center overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        {/* logo */}
        <div>
          <div className="w-full hidden md:flex px-4 py-2 shadow-lg  rounded-lg justify-center items-center bg-rose-100">
            <Logo />
          </div>
        </div>

        <div className="md:min-h-[calc(100vh-100px)] flex flex-col justify-between">
          {/* toggle Button */}
          {role === "host" && (
            <div className="flex justify-center">
              <ToggleBtn toggle={toggle} setToggle={setToggle} />
            </div>
          )}

          {/* Nav itmes */}
          <div className=" flex flex-col flex-1 mt-6">
            <nav className="space-y-4">
              <MenuItem
                icon={FcStatistics}
                address="/dashboard"
                label="Statistics"
              />

              {/* menu items for Host*/}
              {role === "host" && (toggle ? <GuestMenu /> : <HostMenu />)}

              {/* menu items for Guest*/}
              {role === "guest" && <GuestMenu />}

              {/* menu items for Admin*/}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>

          {/* profile and logout */}
          <div className="space-y-2">
            <hr className="my-5" />
            <MenuItem
              icon={IoSettingsSharp}
              address="profile"
              label="Profile"
            />
            <button
              onClick={logOut}
              className="w-[200px] flex items-center px-4 py-3 mx-5 transition-colors duration-300  transform hover:bg-gray-300 hover:text-gray-700"
            >
              <CiLogout className="h-5 w-5" />
              <span className="mx-4 font-medium">LogOut</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
