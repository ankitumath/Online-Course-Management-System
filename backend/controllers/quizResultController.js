import QuizResult
from "../models/QuizResult.js";

export const saveResult =
  async (req, res) => {

    try {

      const result =
        await QuizResult.create({
          studentId:
            req.user.id,

          courseId:
            req.body.courseId,

          score:
            req.body.score,

          totalQuestions:
            req.body.totalQuestions,
        });

      res.status(201)
        .json(result);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

export const getResults =
  async (req, res) => {

    try {

      const results =
        await QuizResult.find({
          studentId:
            req.user.id,
        }).populate(
          "courseId",
          "title"
        );

      res.json(results);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };