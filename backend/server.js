import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import watchHistoryRoutes from "./routes/watchHistoryRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import quizResultRoutes from "./routes/quizResultRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/upload",uploadRoutes);
app.get("/", (req, res) => {
  res.send("Course Management API Running...");
});
app.use(
  "/api/enrollments",
  enrollmentRoutes
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
app.use(
  "/api/protected",
  protectedRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/wishlist",
  wishlistRoutes
);
app.use(
  "/api/reviews",
  reviewRoutes
);
app.use(
  "/api/lessons",
  lessonRoutes
);

app.use(
  "/api/history",
  watchHistoryRoutes
);
app.use(
  "/api/quizzes",
  quizRoutes
);

app.use(
  "/api/results",
  quizResultRoutes
);