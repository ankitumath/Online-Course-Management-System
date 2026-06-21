import mongoose from "mongoose";

const quizResultSchema =
  new mongoose.Schema(
    {
      studentId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      courseId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },

      score: {
        type: Number,
        required: true,
      },

      totalQuestions: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "QuizResult",
  quizResultSchema
);