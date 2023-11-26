import { IoFingerPrintOutline } from "react-icons/io5";
import { FaIoxhost } from "react-icons/fa";
import MenuItem from "./MenuItem";
import Button from "../../components/Button/Button";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { useState } from "react";
import BecomeHostModal from "../../components/Modals/BecomeHostModal";
import { becomeHost } from "../../api/auth";
import { toast } from "react-hot-toast";

const GuestMenu = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const [isOpen, setIsopen] = useState(false);

  const closeModal = () => {
    setIsopen(false);
  };

  const handleHost = async () => {
    try {
      const data = await becomeHost({ email: user?.email, role: user?.role });

      if (data.modifiedCount > 0) {
        toast.success("SUCCESS! please wait for admin approval.");
      } else {
        toast.success("Please, wait for admin approval 😒");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <MenuItem
        icon={IoFingerPrintOutline}
        address="my-bookings"
        label="My Bookings"
      />

      {role === "guest" && (
        <div className="w-[85%] mx-auto">
          <Button
            onClick={() => setIsopen(true)}
            icon={FaIoxhost}
            label={"Become a host"}
          />
        </div>
      )}

      {/* modal */}
      <BecomeHostModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleHost={handleHost}
      />
    </>
  );
};

export default GuestMenu;
