import axiosSecure from ".";

// save user in dataBase with role
export const saveUser = async (user) => {
  const currentUser = {
    email: user?.email,
    role: "guest",
    status: "Verified",
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

// get token from the server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", { email });
  console.log("Token recived from the server ------> ", data);
  return data;
};

// clear token/cookie
export const clearToken = async () => {
  const { data } = await axiosSecure.get("/logout");
  console.log("Token clear ------> ", data);
  return data;
};

// Get user Role
export const getRole = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data.role;
};

// Get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure("/users");
  return data;
};

// Update User Role
export const updateUserRole = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
    status: "Verified",
  };

  const { data } = await axiosSecure.put(`/user/update/${email}`, currentUser);
  return data;
};

// Become host
export const becomeHost = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
    status: "Requested",
  };

  const { data } = await axiosSecure.put(`/users/${email}`, currentUser);

  return data;
};
