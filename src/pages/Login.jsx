import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useAuthProvider } from "../context/AuthProvider";
import iziToast from "izitoast";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { logIn } = useAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLocaleLowerCase() === "a@b.com" && pass === "1234") {
      logIn({ email, pass });
    } else {
      iziToast.show({
        title: "Warning!",
        message: "Invalid username or password",
        position: "topCenter",
        timeout: 3000,
        color: "red",
      });
    }
  };

  return (
    <div className="bg-[#aca6a6] flex justify-center items-center min-h-screen p-5">
      <form
        className="border-2 flex flex-col items-center w-[280px] h-[400px] bg-login text-center"
        onSubmit={handleSubmit}
      >
        <img
          src={logo}
          alt="becooOn"
          className="mt-6"
          width="50px"
          style={{ borderRadius: "50%" }}
        />
        <input
          type="text"
          id="email"
          placeholder="📧 e-mail = a@b.com"
          className="mt-6 p-2 w-10/12 peer"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="mb-3 p-2 w-10/12"
          placeholder="🔑 password = 1234"
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <br />
        <div className="mb-3">
          <button
            type="submit"
            className="border-2 w-[150px] bg-main p-2 text-white rounded-[8px] hover:bg-yellow-400"
          >
            SIGN IN
          </button>
        </div>
        <div className="mb-3">
          <span>
              if you don't have an account yet. <br />
              <Link to="/register" className="text-blue-600">Sign Up!</Link>
            </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
