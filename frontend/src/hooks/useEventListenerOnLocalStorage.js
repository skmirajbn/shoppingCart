import { useEffect } from "react";

export const useEventListenerOnLocalStorage = () => {
  useEffect(() => {
    const handleStorageChange = () => {
      localStorage.removeItem("login");
      if (!localStorage.getItem("login")) {
        window.location.href = "/login";
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
};
