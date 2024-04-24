import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="bg-main flex justify-center min-h-screen p-5">
      <form className="border-2 flex flex-col items-center w-[250px] h-96 mt-[100px] bg-login text-center">
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
          placeholder="📧 e-mail"
          className="mt-6 p-2 input"
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="mb-3 p-2 input"
          placeholder="🔑 password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required
        />
        <br />
        <div className="mb-3">
          {/* <Link to="/reset">Forgot your password?</Link> */}
        </div>
        <div className="mb-3">
          <button type="submit" className="border-2 w-[150px] bg-main p-2 text-white rounded-[8px] hover:bg-yellow-400">
            SIGN IN
          </button>
        </div>
        <div className="mb-3">
          {/* <span>
              if you don't have an account yet.
              <Link to="/register">Sign Up!</Link>
            </span> */}
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-primary">Continue as Guest</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
