import { useState } from "react";
import { loginUser } from "../services/authService";

import { useNavigate }
from "react-router-dom";

import { useAuth }
from "../context/AuthContext";

function Login() {
  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

     const navigate = useNavigate();

  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response =
      await loginUser(formData);

    console.log("LOGIN RESPONSE:", response.data);
console.log("TOKEN:", response.data.token);

    login(
      response.data.user,
      response.data.token
    );

    navigate("/dashboard");

  } catch (error) {
    console.log(
      "LOGIN ERROR:",
      error
    );

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;