import React from "react";
import dateFormat from "dateformat";

const TableRow = ({ title, location, price, from, to, image }) => {
  return (
    <tr>
      {/* title */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Room" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      {/* location */}
      <td>{location}</td>
      {/* price */}
      <td>{price}</td>
      {/* from */}
      <td>{dateFormat(from, "dddd, mmmm dS, yyyy")}</td>
      {/* to */}
      <td>{dateFormat(to, "dddd, mmmm dS, yyyy")}</td>
      {/* delete */}
      <th>
        <button className="btn bg-red-200 btn-xs">Delete</button>
      </th>
      {/* update */}
      <th>
        <button className="btn bg-green-200 btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default TableRow;
