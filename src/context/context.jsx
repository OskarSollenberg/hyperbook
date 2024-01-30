import { createContext, useState } from "react";

import useUsers from "../hooks/useUsers";
import useUser from "../hooks/useUser";
import useCamera from "../hooks/useCamera";

export const ContextProvider = createContext(null);

export const Context = ({ children }) => {
  // Hooks
  const { allUsers, getUsers, addUser } = useUsers();
  const { user, setCurrentUser } = useUser(null);
  const { userImage, saveImage } = useCamera();

  // State
  const [targetUser, setTargetUser] = useState("");

  const setUser = (user) => {
    addUser(user);
    setCurrentUser(user);
  };

  const handleCarouselClick = (user) => {
    setTargetUser(user);
  };

  const value = {
    // users
    allUsers,
    getUsers,
    addUser,
    user,
    setCurrentUser,
    setUser,
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
