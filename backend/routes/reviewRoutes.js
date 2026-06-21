import express from "express";

import protect
from "../middleware/authMiddleware.js";

import {
  createReview,
  getReviews,
} from "../controllers/reviewController.js";

const router =
  express.Router();

router.post(
  "/:courseId",
  protect,
  createReview
);

router.get(
  "/:courseId",
  getReviews
);

export default router;