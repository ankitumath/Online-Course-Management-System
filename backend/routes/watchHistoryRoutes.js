import express
from "express";

import protect
from "../middleware/authMiddleware.js";

import {
  saveWatchHistory,
  getWatchHistory,
}
from "../controllers/watchHistoryController.js";

const router =
  express.Router();

router.post(
  "/",
  protect,
  saveWatchHistory
);

router.get(
  "/",
  protect,
  getWatchHistory
);

export default router;