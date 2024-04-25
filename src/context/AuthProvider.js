import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );

  //?Kullanıcı login olduğunda, home sayfasına yönlendirebilmek için
  const navigate = useNavigate();
  const logIn = ({ email, password }) => {
    setUser({ email, password });
    navigate("/dashboard");
  };
  const logout = () => setUser(null);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const values = {  user, logIn, logout };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
export const useAuthProvider = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
