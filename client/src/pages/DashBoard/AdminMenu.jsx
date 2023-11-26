import { RiUserSettingsLine } from "react-icons/ri";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={RiUserSettingsLine}
        address="manage-users"
        label="Mange Users"
      />
    </>
  );
};

export default AdminMenu;
