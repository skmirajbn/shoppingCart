import { useEffect, useState } from "react";
import { useAuth } from "./auth";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useAuth({ middleware: "guest" });
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);
  return isLoggedIn;
};
