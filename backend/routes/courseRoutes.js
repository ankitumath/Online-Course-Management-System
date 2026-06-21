import express from "express";

import {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();


// Create
router.post(
  "/",
  createCourse
);


// Get All
router.get(
  "/",
  getCourses
);


// Get One
router.get(
  "/:id",
  getCourse
);


// Update
router.put(
  "/:id",
  updateCourse
);


// Delete
router.delete(
  "/:id",
  deleteCourse
);

export default router;