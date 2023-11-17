import { useEffect, useState } from "react";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("login") ? true : false);
  }, []);
  console.log(isLoggedIn);
  return isLoggedIn;
};
