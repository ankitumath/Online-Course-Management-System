import axios from "axios";

const API =
  "http://localhost:5000/api";

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