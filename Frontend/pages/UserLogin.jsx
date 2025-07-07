import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("");  // save email in email state
  const [password, setPassword] = useState("");  // save password in password state
  const [userData, setUserData] = useState({});  // save user data in userData state

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });  // set user data in userData state
    console.log(userData);
    setEmail("");  // clear email state
    setPassword("");  // clear password state
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What`s your email</h3>
          <input
            className="bg-[#eeeeee]  rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // get email from input
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // get password from input
            required
            placeholder="password"
          />
          <button
            className="bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg placeholder:text-base"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login" className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded mb-5 px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
