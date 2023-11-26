import React from "react";
import TableRow from "./TableRow";

const Table = ({ rooms }) => {
  console.log("rooms", rooms);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>From</th>
            <th>To</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {rooms.map((room) => (
            <TableRow
              key={room._id}
              location={room?.location}
              price={room?.price}
              title={room?.title}
              from={room?.from}
              to={room?.to}
              image={room?.image}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
