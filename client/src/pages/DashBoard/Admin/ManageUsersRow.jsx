import React, { useState } from "react";
import UpdateUsersRoleModal from "../../../components/Modals/UpdateUsersRoleModal";
import { toast } from "react-hot-toast";
import { updateUserRole } from "../../../api/auth";
import Loader from "../../../components/Shared/Loader";

const ManageUsersRow = ({ email, role, status, refetch, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdate = async (Role) => {
    console.log(Role);

    try {
      await updateUserRole({ email: email, role: Role });
      toast.success("Updated User Role Succesfully");
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };

  if (isLoading) return <Loader />;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{role}</div>
          </div>
        </div>
      </td>
      <td
        className={`${
          status === "Verified" ? "text-green-500" : "text-red-500"
        } font-bold`}
      >
        {status}
      </td>
      <td>
        <button
          onClick={() => setIsOpen(true)}
          className="btn bg-green-300 btn-xs"
        >
          Update
        </button>
        {/* Modal */}
        <UpdateUsersRoleModal
          isOpen={isOpen}
          closeModal={closeModal}
          role={role}
          handleUpdate={handleUpdate}
        />
      </td>
    </tr>
  );
};

export default ManageUsersRow;
