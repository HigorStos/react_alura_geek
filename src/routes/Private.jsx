import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/api/firebaseConnection";

import { UserContext } from "@/context/UserContext";

const Private = ({ children }) => {
  const { isLogged, setIsLogged } = useContext(UserContext);

  useEffect(() => {
    const checkLogin = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            email: user.email,
          };

          localStorage.setItem("@detailUser", JSON.stringify(userData));
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      });
    };

    checkLogin();
  }, [setIsLogged]);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Private;
