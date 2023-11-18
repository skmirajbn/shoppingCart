import { useEffect, useState } from "react";
import { useAuth } from "./auth";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useAuth({ middleware: "guest" });
  useEffect(() => {
    setTimeout(() => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, 5000);
  }, [user]);
  return isLoggedIn;
};
