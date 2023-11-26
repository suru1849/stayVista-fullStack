import { BsFillHouseAddFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { MdManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} address="add-room" label="Add Room" />

      <MenuItem
        icon={BiSolidBuildingHouse}
        address="my-listings"
        label="My Listings"
      />

      <MenuItem
        icon={MdManageHistory}
        address="manage-bookings"
        label="Manage Bookings"
      />
    </>
  );
};

export default HostMenu;
