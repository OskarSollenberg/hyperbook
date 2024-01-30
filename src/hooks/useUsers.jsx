import { useEffect, useState } from "react";

export default function useUsers() {
  const [allUsers, setAllUsers] = useState(null);

  const getUsers = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setAllUsers(users);
  };

  const addUser = (user) => {
    localStorage.setItem("users", JSON.stringify([...allUsers, user]));
    setAllUsers((prev) => [...prev, user]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { allUsers, addUser, getUsers };
}
