export default function useFindUserIndex(username) {
  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = allUsers.findIndex((u) => u.username === username);

  return userIndex;
}
