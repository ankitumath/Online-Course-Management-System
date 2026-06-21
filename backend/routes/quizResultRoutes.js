import express
from "express";

import protect
from "../middleware/authMiddleware.js";

import {
  saveResult,
  getResults,
}
from "../controllers/quizResultController.js";

const router =
  express.Router();

router.post(
  "/",
  protect,
  saveResult
);

router.get(
  "/",
  protect,
  getResults
);

export default router;