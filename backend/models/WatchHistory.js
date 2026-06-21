import mongoose from "mongoose";

const watchHistorySchema =
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

      lessonId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        required: true,
      },

      watchedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "WatchHistory",
  watchHistorySchema
);