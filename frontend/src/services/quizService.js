import axios from "axios";

const API =
  "https://online-course-management-system-as0l.onrender.com/api/quizzes";

export const getQuiz =
  async (courseId) => {
    return await axios.get(
      `${API}/${courseId}`
    );
  };

export const createQuiz =
  async (quizData) => {
    return await axios.post(
      API,
      quizData
    );
  };