import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  const room = useLoaderData();

  return (
    <Container>
      <Helmet>
        <title>{`StayVista | ${room?.title}`}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        {/* header */}
        <div className="flex flex-col gap-6">
          <Header room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-10">
          {/* room info */}
          <RoomInfo room={room} />

          {/* calender */}
          <div className="md:col-span-3 order-first md:order-last mb-10">
            {/* roomReservation */}
            <RoomReservation room={room} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
