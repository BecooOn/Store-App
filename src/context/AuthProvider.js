import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const values = { user, setUser };
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
export const useAuthProvider = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
