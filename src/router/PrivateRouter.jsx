import React from "react";
import { useAuthProvider } from "../context/AuthProvider";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useAuthProvider();
  return (
    <>
      {user ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default PrivateRouter;
