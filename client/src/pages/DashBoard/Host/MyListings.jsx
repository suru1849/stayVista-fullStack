import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getHostRoom } from "../../../api/rooms";
import Table from "../../../components/Table/Table";

const MyListings = () => {
  const { user } = useAuth();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getHostRoom(user?.email).then((data) => setRooms(data));
  }, [user]);

  return <Table rooms={rooms} />;
};

export default MyListings;
