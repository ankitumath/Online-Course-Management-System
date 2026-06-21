import axios from "axios";

const API =
  "http://localhost:5000/api/quizzes";

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