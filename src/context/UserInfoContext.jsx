import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/fierbase";

export const UserInfoContext = createContext(null);

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUserInfo(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo, loading }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  return context;
};

export default UserInfoContext;
