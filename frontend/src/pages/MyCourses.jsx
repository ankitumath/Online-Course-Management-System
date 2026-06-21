import {
  useEffect,
  useState,
} from "react";

import {
  useAuth,
} from "../context/AuthContext";

import {
  getMyEnrollments,
} from "../services/enrollmentService";

import generateCertificate
from "../utils/generateCertificate";

import DashboardLayout
from "../components/layout/DashboardLayout";

import { Link } from "react-router-dom";


function MyCourses() {
  const { user, token } =
  useAuth();

  const [courses, setCourses] =
    useState([]);

  useEffect(() => {

  if (user) {
    fetchEnrollments();
  }

}, [token]);

  const fetchEnrollments =
    async () => {
      if (!user) return;
      try {
        const response =
          await getMyEnrollments(
            token
          );
          console.log(response.data);

        setCourses(
          response.data
        );
      } catch (error) {
        console.log(error);
      }
      
    };
return (
  <DashboardLayout>
    <div
      className="
      min-h-screen
      bg-slate-100
      dark:bg-slate-950
      p-10
      transition-colors
    "
    >
      <h1
        className="
        text-4xl
        font-bold
        mb-8
        text-slate-900
        dark:text-white
      "
      >
        My Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((enrollment) => (

          <div
            key={enrollment._id}
            className="
            bg-white
            dark:bg-slate-800
            rounded-2xl
            overflow-hidden
            shadow-lg
            hover:shadow-xl
            transition
          "
          >

            {/* Course Image */}

            <img
              src={
                enrollment.courseId.thumbnail ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              }
              alt={enrollment.courseId.title}
              className="
              w-full
              h-52
              object-cover
            "
            />

            {/* Content */}

            <div className="p-5">

              <h2
                className="
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
              >
                {enrollment.courseId.title}
              </h2>

              <p
                className="
                text-slate-600
                dark:text-slate-300
                mt-2
              "
              >
                {enrollment.courseId.description}
              </p>

              {/* Progress */}

              <div className="mt-4">

                <div
                  className="
                  flex
                  justify-between
                  text-sm
                  mb-2
                  text-slate-700
                  dark:text-slate-300
                "
                >
                  <span>Progress</span>
                  <span>
                    {enrollment.progress}%
                  </span>
                </div>

                <div
                  className="
                  w-full
                  bg-slate-300
                  dark:bg-slate-700
                  rounded-full
                  h-3
                "
                >
                  <div
                    className="
                    bg-indigo-600
                    h-3
                    rounded-full
                  "
                    style={{
                      width: `${enrollment.progress}%`,
                    }}
                  ></div>
                </div>

              </div>

              {/* Buttons */}

              <Link
                to={`/player/${enrollment.courseId._id}`}
              >
                <button
                  className="
                  mt-5
                  w-full
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                "
                >
                  ▶ Start Learning
                </button>
              </Link>

              {enrollment.progress === 100 && (

                <button
                  onClick={() =>
                    generateCertificate(
                      user.name,
                      enrollment.courseId.title
                    )
                  }
                  className="
                  mt-3
                  w-full
                  bg-yellow-500
                  hover:bg-yellow-600
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                "
                >
                  🏆 Download Certificate
                </button>

              )}

            </div>

          </div>

        ))}

      </div>
    </div>
  </DashboardLayout>
);
}

export default MyCourses;