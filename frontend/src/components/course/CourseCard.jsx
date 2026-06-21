import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        bg-white
        dark:bg-slate-800
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
      "
    >
      <img
  src={
    course.thumbnail &&
    course.thumbnail.trim() !== ""
      ? course.thumbnail
      : "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
  alt={course.title}
  className="
    w-full
    h-48
    object-cover
  "
/>

      <div className="p-5">
        <span
          className="
            bg-indigo-100
            dark:bg-indigo-900
            text-indigo-700
            dark:text-indigo-300
            px-3
            py-1
            rounded-full
            text-sm
          "
        >
          {course.category}
        </span>

        <h2
          className="
            text-xl
            font-bold
            mt-3
            text-slate-900
            dark:text-white
          "
        >
          {course.title}
        </h2>

        <p
          className="
            text-gray-600
            dark:text-slate-300
            mt-2
          "
        >
          {course.description}
        </p>

        <div
          className="
            flex
            justify-between
            items-center
            mt-4
          "
        >
          <span
            className="
              text-slate-700
              dark:text-slate-300
            "
          >
            ⏱ {course.duration}
          </span>

          <Link
            to={`/courses/${course._id}`}
          >
            <button
              className="
                bg-indigo-600
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-indigo-700
                transition
              "
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseCard;