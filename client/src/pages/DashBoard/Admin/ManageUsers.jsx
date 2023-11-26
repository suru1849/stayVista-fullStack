import { getAllUsers } from "../../../api/auth";
import Loader from "../../../components/Shared/Loader";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ManageUsersRow from "./ManageUsersRow";

const ManageUsers = () => {
  const { user, loading } = useAuth();

  // tanStack Query
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => await getAllUsers(),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {users &&
            users.map((user) => (
              <ManageUsersRow
                key={user._id}
                email={user.email}
                role={user?.role}
                status={user?.status}
                refetch={refetch}
                isLoading={isLoading}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
