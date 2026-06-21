import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import AdminCourses from "./pages/AdminCourses";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/auth/AdminRoute";
import Wishlist from "./pages/Wishlist";
import AdminLessons from "./pages/AdminLessons";
import CoursePlayer from "./pages/CoursePlayer";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/courses/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/my-courses"
          element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          }
        />

        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/courses"
  element={
    <AdminRoute>
      <AdminCourses />
    </AdminRoute>
  }
/>

<Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>

<Route
  path="/wishlist"
  element={<Wishlist />}
/>

<Route
  path="/admin/lessons/:courseId"
  element={
    <AdminLessons />
  }
/>

<Route
  path="/player/:id"
  element={
    <CoursePlayer />
  }
/>
<Route
  path="/quiz/:courseId"
  element={<Quiz />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;