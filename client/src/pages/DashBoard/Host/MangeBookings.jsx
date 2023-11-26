import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getHostBookings } from "../../../api/bookings";
import Loader from "../../../components/Shared/Loader";
import ManageBookingsRow from "./ManageBookingsRow";

const MangeBookings = () => {
  const { user, loading } = useAuth();

  // tanStcakQuery
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: !loading,
    queryFn: async () => await getHostBookings(user?.email),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>Title</th>
            <th>Guest Info</th>
            <th>Price</th>
            <th>From</th>
            <th>To</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {bookings?.map((booking) => (
            <ManageBookingsRow
              key={booking._id}
              title={booking.title}
              guest={booking.guest}
              price={booking.price}
              to={booking.to}
              from={booking.from}
              image={booking.image}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MangeBookings;
