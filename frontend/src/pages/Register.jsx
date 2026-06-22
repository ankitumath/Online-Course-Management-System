import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {

  await registerUser(formData);

  alert("Account Created Successfully");

  navigate("/login");

} catch (error) {

  alert(
    error.response?.data?.message ||
    "Registration Failed"
  );

}

};

return ( <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 transition-colors">

  <form
    onSubmit={handleSubmit}
    className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md"
  >

    <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
      Create Account
    </h1>

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      className="w-full border p-3 mb-4 rounded dark:bg-slate-700 dark:text-white"
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-full border p-3 mb-4 rounded dark:bg-slate-700 dark:text-white"
      onChange={handleChange}
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      className="w-full border p-3 mb-4 rounded dark:bg-slate-700 dark:text-white"
      onChange={handleChange}
    />

    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-3 rounded-lg"
    >
      Create Account
    </button>

    <p className="mt-4 text-center text-slate-600 dark:text-slate-300">
      Already have an account?
      <Link
        to="/login"
        className="text-indigo-600 ml-2 font-semibold"
      >
        Login
      </Link>
    </p>

  </form>

</div>

);
}

export default Register;
