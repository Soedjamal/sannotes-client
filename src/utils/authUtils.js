import axiosInstance from "../lib/axios";

export const saveUser = async (username, email, password) => {
  const user = { username, email, password };
  await axiosInstance.post("/user", user);
  // localStorage.setItem("user", JSON.stringify(user));
};

export const logginSession = async (id, username) => {
  const user = { id, username };
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user")) || [];
};

export const logOut = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
};
