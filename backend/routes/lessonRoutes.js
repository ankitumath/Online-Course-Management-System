import express from "express";

import {
  createLesson,
  getLessons,
} from "../controllers/lessonController.js";

const router =
  express.Router();

router.post(
  "/",
  createLesson
);

router.get(
  "/:courseId",
  getLessons
);

export default router;