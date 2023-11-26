import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  const [role] = useRole();

  return (
    <div className="min-h-[calc(100vh-50px)] flex justify-center items-center">
      <div className="bg-base-300 p-10 w-[70vw] rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center p-5">
          {/* profile */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
          {/* role */}
          <div className="bg-sky-400 w-[100px] text-center p-2 text-lg uppercase font-bold text-white my-5 rounded-md">
            {role}
          </div>
          {/*user id  */}
          <div className="text-lg font-bold">User Id: {user?.uid}</div>
        </div>
        <div className="flex justify-around my-10">
          <div className="text-lg flex flex-col">
            <span className="text-gray-400 font-medium">Name</span>
            <span className="font-bold">{user?.displayName}</span>
          </div>
          <div className="text-lg flex flex-col">
            <span className="text-gray-400 font-medium">Email</span>
            <span className="font-bold">{user?.email}</span>
          </div>
          <div className="flex flex-col gap-1">
            <button className="btn btn-success text-white">
              Update Profile
            </button>
            <button className="btn btn-error text-white">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
