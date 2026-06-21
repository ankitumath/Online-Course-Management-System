import express from "express";

import {
  addToWishlist,
  getWishlist,
  removeWishlist,
} from "../controllers/wishlistController.js";

import protect from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.get(
  "/",
  protect,
  getWishlist
);

router.post(
  "/:courseId",
  protect,
  addToWishlist
);

router.delete(
  "/:courseId",
  protect,
  removeWishlist
);

export default router;