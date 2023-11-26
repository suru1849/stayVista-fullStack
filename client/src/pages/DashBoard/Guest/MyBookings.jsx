import { getBookings } from "../../../api/bookings";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import MyBookingsRow from "./MyBookingsRow";
import Loader from "../../../components/Shared/Loader";

const MyBookings = () => {
  const { user, loading } = useAuth();

  // tanStack Query
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: !loading,
    queryFn: async () => await getBookings(user?.email),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>Title</th>
            <th>Host</th>
            <th>Price</th>
            <th>From</th>
            <th>To</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {bookings?.map((booking) => (
            <MyBookingsRow
              key={booking._id}
              title={booking.title}
              hostEmail={booking.host}
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

export default MyBookings;
