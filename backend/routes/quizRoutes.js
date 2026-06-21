import express from "express";

import {
  createQuiz,
  getQuizByCourse,
}
from "../controllers/quizController.js";

const router =
  express.Router();

router.post(
  "/",
  createQuiz
);

router.get(
  "/:courseId",
  getQuizByCourse
);

export default router;