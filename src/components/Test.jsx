import { useContext } from "react";
import { ContextProvider } from "../context/context";

function Test() {
  const { allUsers } = useContext(ContextProvider);
  const { handleCarouselClick } = useContext(ContextProvider);

  if (!allUsers) return null;
  return (
    <div className="flex gap-5">
      {allUsers
        .filter((user) => !user.selected)
        .map((user, index) => (
          <img
            onClick={() => handleCarouselClick(user)}
            src={user.image}
            key={index}
          ></img>
        ))}
    </div>
  );
}

export default Test;
