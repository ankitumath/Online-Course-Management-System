import { Link } from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  useAuth,
} from "../context/AuthContext";

import {
  getMyEnrollments,
  updateProgress,
} from "../services/enrollmentService";

import ProgressBar from "../components/dashboard/ProgressBar";

import DashboardLayout from "../components/layout/DashboardLayout";

function Dashboard() {
  const { user, token } =
    useAuth();

  const [courses, setCourses] =
    useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments =
    async () => {
      try {
        const response =
          await getMyEnrollments(
            token
          );

        setCourses(
          response.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const handleProgress =
    async (
      id,
      progress
    ) => {
      try {
        await updateProgress(
          id,
          progress,
          token
        );

        fetchEnrollments();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300 p-6">

        {/* Welcome Card */}

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold">
            Welcome Back,
            {" "}
            {user?.name} 👋
          </h1>

          <p className="mt-2 text-lg">
            Continue your learning journey
          </p>

          <Link
            to="/profile"
            className="inline-block mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            View Profile
          </Link>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white dark:bg-slate-800 dark:text-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 dark:text-gray-300">
              Total Courses
            </h3>

            <p className="text-4xl font-bold text-indigo-600">
              {courses.length}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 dark:text-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 dark:text-gray-300">
              Completed
            </h3>

            <p className="text-4xl font-bold text-green-600">
              {
                courses.filter(
                  (course) =>
                    course.progress >= 100
                ).length
              }
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 dark:text-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 dark:text-gray-300">
              Average Progress
            </h3>

            <p className="text-4xl font-bold text-purple-600">
              {courses.length
                ? Math.round(
                    courses.reduce(
                      (total, course) =>
                        total +
                        course.progress,
                      0
                    ) /
                      courses.length
                  )
                : 0}
              %
            </p>
          </div>

        </div>

        {/* Courses */}

        <div className="bg-white dark:bg-slate-800 dark:text-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            My Courses
          </h2>

          {courses.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300">
              No enrolled courses yet.
            </p>
          ) : (
            courses.map(
              (course) => (
                <div
                  key={course._id}
                  className="
                    border
                    dark:border-slate-700
                    p-4
                    rounded-lg
                    mb-4
                    bg-white
                    dark:bg-slate-900
                  "
                >
                  <h3 className="font-bold text-lg">
                    {
                      course.courseId
                        ?.title
                    }
                  </h3>

                  <div className="mt-3">
                    <ProgressBar
                      progress={
                        course.progress
                      }
                    />

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {course.progress}% Completed
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleProgress(
                        course._id,
                        Math.min(
                          course.progress +
                            10,
                          100
                        )
                      )
                    }
                    className="
                      mt-3
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      transition
                    "
                  >
                    Complete Lesson
                  </button>
                </div>
              )
            )
          )}
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;