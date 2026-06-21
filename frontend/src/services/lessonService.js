import axios from "axios";

const API =
  "https://online-course-management-system-as0l.onrender.com/api/lessons";

export const getLessons =
  async (courseId) => {
    return await axios.get(
      `${API}/${courseId}`
    );
  };

export const createLesson =
  async (
    lessonData
  ) => {
    return await axios.post(
      API,
      lessonData
    );
  };