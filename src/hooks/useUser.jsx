import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);

  const setCurrentUser = (user) => {
    setUser(user);
  };

  return { user, setCurrentUser };
}
