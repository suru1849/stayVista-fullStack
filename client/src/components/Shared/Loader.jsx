/* eslint-disable react/prop-types */
import { GridLoader } from "react-spinners";

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <GridLoader size={10} color="red" />
    </div>
  );
};

export default Loader;
