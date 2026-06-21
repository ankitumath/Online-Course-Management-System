import { Link } from "react-router-dom";
import {
  useTheme,
} from "../../context/ThemeContext";

import {
  useAuth,
} from "../../context/AuthContext";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const { user } = useAuth();

  const {
    darkMode,
    setDarkMode,
  } = useTheme();

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.clear();
  navigate("/login");
};

useEffect(() => {
  const token =
    localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }
}, []);

  return (
    <div
      className="
        w-64
        min-h-screen
        bg-gradient-to-b
        from-indigo-700
        to-purple-700
        text-white
        p-6
      "
    >
      <h1 className="text-3xl font-bold mb-10">
        OnCourse
      </h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="
            block
            p-3
            rounded-lg
            hover:bg-white/20
            transition
          "
        >
          📊 Dashboard
        </Link>

        <Link
          to="/courses"
          className="
            block
            p-3
            rounded-lg
            hover:bg-white/20
            transition
          "
        >
          📚 Courses
        </Link>

        <Link
          to="/my-courses"
          className="
            block
            p-3
            rounded-lg
            hover:bg-white/20
            transition
          "
        >
          🎓 My Courses
        </Link>

        <Link
  to="/wishlist"
  className="
    block
    p-3
    rounded-lg
    hover:bg-white/20
  "
>
  ❤️ Wishlist
</Link>

        <Link
          to="/profile"
          className="
            block
            p-3
            rounded-lg
            hover:bg-white/20
            transition
          "
        >
          👤 Profile
        </Link>

        {user?.role ===
  "admin" && (

  <Link
    to="/admin/courses"
    className="
      block
      p-3
      rounded-lg
      hover:bg-white/20
    "
  >
    ⚙️ Manage Courses
  </Link>

)}

{user?.role ===
  "admin" && (

        <Link
  to="/admin"
  className="
    block
    p-3
    rounded-lg
    hover:bg-white/20
  "
>
  📈 Analytics
  
</Link>
  )}

  
  
      </nav>
    <button
  onClick={() =>
    setDarkMode(
      !darkMode
    )
  }
  className="
    mt-10
    w-full
    bg-white/20
    p-3
    rounded-lg
  "
>
  {darkMode
    ? "☀️ Light Mode"
    : "🌙 Dark Mode"}
</button>

<button
  onClick={handleLogout}
  className="
    w-full
    mt-4
    bg-red-500
    hover:bg-red-600
    text-white
    py-3
    rounded-xl
    font-semibold
  "
>
  🚪 Logout
</button>



    </div>
  );
}

export default Sidebar;