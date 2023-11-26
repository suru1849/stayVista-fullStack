import axiosSecure from ".";

// create payment Intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

// Save booking Info
export const saveBookingInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/bookings", paymentInfo);
  return data;
};

// Update room status after booking in DB
export const updateStatus = async (id, status) => {
  const { data } = await axiosSecure.patch(`/rooms/status/${id}`, { status });
  return data;
};

// Get bookings for Guest
export const getBookings = async (email) => {
  const { data } = await axiosSecure(`/bookings/${email}`);
  return data;
};

// Get bookings for Host
export const getHostBookings = async (email) => {
  const { data } = await axiosSecure(`/bookings/host/${email}`);
  return data;
};
