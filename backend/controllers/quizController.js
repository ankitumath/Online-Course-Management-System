import Quiz from "../models/Quiz.js";

export const createQuiz =
  async (req, res) => {
    try {

      const quiz =
        await Quiz.create(
          req.body
        );

      res.status(201)
        .json(quiz);

    } catch (error) {

      res.status(500)
        .json({
          message:
            error.message,
        });

    }
  };

export const getQuizByCourse =
  async (req, res) => {

    try {

      const quizzes =
        await Quiz.find({
          courseId:
            req.params.courseId,
        });

      res.json(quizzes);

    } catch (error) {

      res.status(500)
        .json({
          message:
            error.message,
        });

    }
  };