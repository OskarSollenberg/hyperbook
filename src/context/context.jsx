import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthenticationContext";
import { setItem } from "localforage";
import { Users } from "lucide-react";

export const ContextProvider = createContext({
  userImage: null,
  saveImage: () => {},
  allUsers: null,
  user: null,
  handleImageClick: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  handleRemoveImage: () => {},
  carouselUsers: [],
  setCarouselUsers: () => {},
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const { allUsers, user } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);
  const [carouselUsers, setCarouselUsers] = useState([]);

  const handleRemoveImage = (selectedUser) => {
    const newUsers = carouselUsers.filter(
      (user) => user.username !== selectedUser.username
    );
    setTimeout(() => {
      setSelectedUser(newUsers[Math.floor(Math.random() * newUsers.length)]);
    }, 200);
    setCarouselUsers(newUsers);
  };

  const handleImageClick = (user) => {
    setSelectedUser(user);
  };

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  const value = {
    userImage,
    saveImage,
    allUsers,
    handleImageClick,
    selectedUser,
    setSelectedUser,
    handleRemoveImage,
    carouselUsers,
    setCarouselUsers,
    user,
    personalLikes,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
