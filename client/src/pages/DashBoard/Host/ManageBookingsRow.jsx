import dateFormat from "dateformat";

const ManageBookingsRow = ({ title, guest, price, from, to, image }) => {
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
      {/* Info */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={guest?.image} alt="Room" />
            </div>
          </div>
          <div>
            <div className="font-bold">{guest?.email}</div>
          </div>
        </div>
      </td>
      {/* price */}
      <td>{price}</td>
      {/* from */}
      <td>{dateFormat(from, "dddd, mmmm dS, yyyy")}</td>
      {/* to */}
      <td>{dateFormat(to, "dddd, mmmm dS, yyyy")}</td>
      {/* cancel */}
      <th>
        <button className="btn bg-red-200 btn-xs">Cancel</button>
      </th>
    </tr>
  );
};

export default ManageBookingsRow;
