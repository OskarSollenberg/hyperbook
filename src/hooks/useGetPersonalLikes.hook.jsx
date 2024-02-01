import useFindUserIndex from "./useFindUserIndex.hook";

export default function useGetPersonalLikes(username) {
  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  let personalLikes = [];

  const userIndex = useFindUserIndex(username);
  const userLikes = allUsers[userIndex].liked;

  userLikes.forEach((likedUser) => {
    const indexOfLikedUser = useFindUserIndex(likedUser);

    if (allUsers[indexOfLikedUser].liked.includes(username)) {
      personalLikes.push(allUsers[indexOfLikedUser]);
    }
  });

  return personalLikes;
}
