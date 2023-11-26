import axiosSecure from ".";

// Fetch all rooms Form dataBase
export const getAllRooms = async () => {
  const { data } = await axiosSecure("/rooms");
  return data;
};

// Fetch a Single room Form dataBase
export const getRoom = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data;
};

// Fetch rooms of host
export const getHostRoom = async (email) => {
  const { data } = await axiosSecure(`/rooms/${email}`);
  return data;
};

// save roomData in database
export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post("/rooms", roomData);
  return data;
};
