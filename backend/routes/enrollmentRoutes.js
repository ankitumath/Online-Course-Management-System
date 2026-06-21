import express from "express";

import {
  enrollCourse,
  getMyEnrollments,
  updateProgress
} from "../controllers/enrollmentController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/:courseId",
  protect,
  enrollCourse
);

router.get(
  "/",
  protect,
  getMyEnrollments
);

router.put(
  "/:id",
  protect,
  updateProgress
);

export default router;