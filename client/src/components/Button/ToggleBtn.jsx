import { useState } from "react";

const ToggleBtn = ({ toggle, setToggle }) => {
  const [active, setActive] = useState(true);

  const handleLeft = () => {
    setActive(true);
    setToggle(true);
  };

  const handleRight = () => {
    setActive(false);
    setToggle(false);
  };

  return (
    <div>
      <button
        onClick={handleLeft}
        className={`btn font-bold  ${
          active ? "bg-red-400 text-white hover:bg-red-300" : "bg-gray-300"
        }  rounded-r-none mr-0`}
      >
        Guest
      </button>
      <button
        onClick={handleRight}
        className={`btn font-bold ${
          !active ? "bg-red-400 text-white hover:bg-red-300" : "bg-gray-300"
        } rounded-l-none ml-0`}
      >
        Host
      </button>
    </div>
  );
};

export default ToggleBtn;
