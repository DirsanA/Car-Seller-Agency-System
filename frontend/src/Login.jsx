import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ada@123" && password === "ada@123") {
      navigate("/call-seller-card");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 h-screen">
      <div className="bg-gray-800 shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="mb-6 font-semibold text-white text-3xl text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-300 text-sm"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-700 mt-1 p-3 border border-gray-600 focus:border-indigo-500 rounded-md focus:ring-indigo-500 w-full text-white"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block font-medium text-gray-300 text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-700 mt-1 p-3 border border-gray-600 focus:border-indigo-500 rounded-md focus:ring-indigo-500 w-full text-white"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full font-semibold text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
