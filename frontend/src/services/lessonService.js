import axios from "axios";

const API =
  "http://localhost:5000/api/lessons";

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