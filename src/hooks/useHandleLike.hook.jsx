import useFindUserIndex from "./useFindUserIndex.hook";

export default function useHandleLike(user, selectedUser, setAllUsers) {
  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = useFindUserIndex(user);

  if (userIndex !== -1) {
    allUsers[userIndex].liked.push(selectedUser);
    localStorage.setItem("users", JSON.stringify(allUsers));
    console.log(allUsers);
  } else {
    console.log("Person not found");
  }

  setAllUsers(allUsers);
}
