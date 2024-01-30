import { createContext, useState, useEffect } from "react";

import useUsers from "../hooks/useUsers";
import useUser from "../hooks/useUser";
import useCamera from "../hooks/useCamera";

export const ContextProvider = createContext(null);

export const Context = ({ children }) => {
  // HOOKS
  //users
  const { allUsers, getUsers, addUser } = useUsers([]);
  //user
  const { user, setCurrentUser } = useUser({});
  //camera
  const { userImage, saveImage } = useCamera("");

  // State
  const [targetUser, setTargetUser] = useState("");

  // Adding a new user to LS/ users state / and user state
  const setNewUser = (user) => {
    addUser(user);
    setCurrentUser(user);
  };

  // Setting the target user to be displayed in the carousel
  const handleCarouselClick = (user) => {
    setTargetUser(user);
  };

  const value = {
    // users
    allUsers,
    getUsers,
    addUser,
    user,
    setNewUser,
    targetUser,

    // camera / images
    handleCarouselClick,
    userImage,
    saveImage,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
