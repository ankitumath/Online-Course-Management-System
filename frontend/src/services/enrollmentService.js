import axios from "axios";

const API =
  "http://localhost:5000/api/enrollments";

export const enrollCourse =
  async (
    studentId,
    courseId,
    token
  ) => {

    return await axios.post(
      `${API}/${courseId}`,
      {
        studentId,
        courseId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

export const getMyEnrollments =
  async (token) => {
    return await axios.get(
      API,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  export const updateProgress =
  async (
    id,
    progress,
    token
  ) => {

    return await axios.put(
      `${API}/${id}`,
      { progress },
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  };