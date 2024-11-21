import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";

export const useValidate = () => {
  const [users, setUsers] = useState([]);
  const [validPassword, setValidPassowrd] = useState("");
  const [validUsername, setValidUsername] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const response = await axiosInstance.get("/users");
      setUsers(response.data);
      console.log(response.data);
    }
    fetchUser();
  }, []);

  function getUser() {
    return users.map(
      (user) =>
        setValidUsername(user.username) && setValidPassowrd(user.password),
    );
  }

  return {
    users,
    getUser,
    validUsername,
    validPassword,
  };
};
