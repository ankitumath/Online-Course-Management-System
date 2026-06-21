import axios from "axios";

const API =
  "https://online-course-management-system-as0l.onrender.com/api";

export const getStats =
  async () => {
    const courses =
      await axios.get(
        `${API}/courses`
      );

    const enrollments =
      await axios.get(
        `${API}/enrollments`
      );

    return {
      totalCourses:
        courses.data.length,

      totalEnrollments:
        enrollments.data.length,
    };
  };