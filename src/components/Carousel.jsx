import { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../context/context";
import { useAuth } from "../context/AuthenticationContext";
import useFindUserIndex from "../hooks/useFindUserIndex.hook";

export default function Carousel() {
  const { allUsers, user } = useAuth();
  const { handleImageClick, carouselUsers, setCarouselUsers } =
    useContext(ContextProvider);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const usersWithoutUser = users.filter((u) => u.username !== user.username);

    const currentUserIndex = useFindUserIndex(user.username);
    console.log(allUsers);

    const usersWithoutUserLikes = usersWithoutUser.filter((person) => {
      return !allUsers[currentUserIndex].liked.includes(person.username);
    });

    const usersWithoutUserLikesDislikes = usersWithoutUserLikes.filter(
      (person) => {
        return !allUsers[currentUserIndex].disliked.includes(person.username);
      }
    );

    //const allPeopleWoShouldBeInCarousel = usersWithoutUser.filter((u) => u.username !== likeDislikePeople.username)
    //     likedDislikedPeople.forEach((person) => {usersWithoutUser.filter((u) => u.username !== person.username)});
    setCarouselUsers(usersWithoutUserLikesDislikes);
  }, []);

  return (
    <div className="m-8 relative overflow-auto">
      <div className="w-fit">
        <div className="overflow-x-auto flex">
          {carouselUsers.map((user, index) => {
            return (
              <div
                key={index}
                className={`w-56 h-76 m-3 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer `}
                onClick={() => {
                  handleImageClick(user);
                }}
              >
                <img
                  src={user.image}
                  alt={`Picture ${user.name}`}
                  className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-x-3 bottom-1">
                  <p className="text-white font-semibold">{user.name}</p>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
