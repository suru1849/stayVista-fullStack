import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

/* eslint-disable react/prop-types */
const CategorieBox = ({ label, icon: Icon, selected }) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  // console.log(selected);

  const handleClick = () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = { ...currentQuery, category: label };

    const url = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });

    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-blue-300 transition cursor-pointer ${
        selected && "text-blue-600 border-b-2 border-b-blue-600"
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategorieBox;
