import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import { getRoom } from "../api/rooms";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AddRoom from "../pages/DashBoard/Host/AddRoom";
import MyListings from "../pages/DashBoard/Host/MyListings";
import HostRoutes from "./HostRoutes";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../pages/DashBoard/Admin/ManageUsers";
import Profile from "../pages/DashBoard/Common/Profile";
import MyBookings from "../pages/DashBoard/Guest/MyBookings";
import MangeBookings from "../pages/DashBoard/Host/MangeBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoutes>
            <RoomDetails></RoomDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "add-room",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <AddRoom />
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-listings",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <MyListings />
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <ManageUsers />
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <HostRoutes>
            <MangeBookings />
          </HostRoutes>
        ),
      },
    ],
  },
]);
