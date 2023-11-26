/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
import BookingModal from "../../components/Modals/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomReservation = ({ room }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChangeDate = (ranges) => {
    console.log(ranges);
    setValue({
      startDate: new Date(room?.from),
      endDate: new Date(room?.to),
      key: "selection",
    });
  };

  // total days
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
  );

  // total Price
  const totalPrice = parseInt(room?.price) * totalDays;

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: value?.endDate,
    from: value?.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
  });

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender handleChangeDate={handleChangeDate} value={value} />
      </div>
      <hr />
      <div onClick={() => setIsOpen(true)} className="p-4">
        <Button
          disabled={room?.host?.email === user?.email || room?.booked?.status}
          label={"Reserve"}
        />
      </div>
      <hr />
      <div className="p-4 flex justify-between items-center font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      {/* Modal */}
      <BookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        bookingInfo={bookingInfo}
      />
    </div>
  );
};

export default RoomReservation;
