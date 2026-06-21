import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getCourses } from "../services/courseService";
import CourseCard from "../components/course/CourseCard";
import DashboardLayout from "../components/layout/DashboardLayout";

function Courses() {
const [courses, setCourses] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

useEffect(() => {
fetchCourses();
}, []);

const fetchCourses = async () => {
try {
const response = await getCourses();
setCourses(response.data);
} catch (error) {
console.log(error);
}
};

const filteredCourses = courses.filter(
(course) =>
(category === "All" ||
course.category === category) &&
course.title
.toLowerCase()
.includes(search.toLowerCase())
);

const categories = [
"All",
...new Set(
courses.map(
(course) => course.category
)
),
];

const topCourses =
  [...courses]
    .sort(
      (a, b) =>
        b.averageRating -
        a.averageRating
    )
    .slice(0, 3);

return ( <DashboardLayout> <div
     className="
       min-h-screen
       bg-slate-100
       dark:bg-slate-950
       p-8
       transition-colors
       duration-300
     "
   >
<motion.h1
initial={{
opacity: 0,
y: -20,
}}
animate={{
opacity: 1,
y: 0,
}}
className="
text-4xl
font-bold
mb-8
text-slate-900
dark:text-white
"
>
Explore Courses
</motion.h1>

<h2
  className="
  text-3xl
  font-bold
  mb-6
  dark:text-white
  "
>
  🏆 Top Rated Courses
</h2>


    {/* Search Bar */}
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          p-4
          rounded-xl
          border
          border-gray-300
          dark:border-slate-700
          bg-white
          dark:bg-slate-800
          text-slate-900
          dark:text-white
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />
    </div>

    {/* Category Filter */}
    <div className="mb-8">
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="
          p-3
          rounded-xl
          border
          border-gray-300
          dark:border-slate-700
          bg-white
          dark:bg-slate-800
          text-slate-900
          dark:text-white
        "
      >
        {categories.map((cat) => (
          <option
            key={cat}
            value={cat}
          >
            {cat}
          </option>
        ))}
      </select>
    </div>

    {filteredCourses.length === 0 ? (
      <div
        className="
          bg-white
          dark:bg-slate-800
          p-6
          rounded-xl
          shadow
          text-slate-600
          dark:text-slate-300
        "
      >
        No courses found.
      </div>
    ) : (
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {filteredCourses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
          />
        ))}
      </div>
    )}
  </div>
</DashboardLayout> 


);
}

export default Courses;
