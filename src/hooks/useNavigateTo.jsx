import { useNavigate } from "react-router-dom";

export default function useNavigateTo() {
  const navigate = useNavigate();

  const goTo = (page) => {
    navigate(page);
  };
  return { goTo };
}
