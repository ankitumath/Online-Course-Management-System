import mongoose from "mongoose";

const wishlistSchema =
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
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Wishlist",
  wishlistSchema
);