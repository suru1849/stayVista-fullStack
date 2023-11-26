import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);

    getAllRooms().then((data) => {
      if (category) {
        const filteredData = data.filter((room) => room.category === category);
        setRooms(filteredData);
      } else {
        setRooms(data);
      }
      setLoading(false);
    });
  }, [category]);

  console.log(category, rooms);

  // Loading
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {rooms.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
          <Heading
            center
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories"
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
