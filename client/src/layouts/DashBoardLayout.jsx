import { Outlet } from "react-router-dom";
import SideBar from "../pages/DashBoard/SideBar";

const DashBoardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* sideBar components */}
      <SideBar />
      <div className="flex-1 md:ml-64 top-20 z-0">
        <div className="p-5">
          {/* outlets for dynamic component */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
