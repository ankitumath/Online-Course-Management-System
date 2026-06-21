import Review from "../models/Review.js";
import Course from "../models/Course.js";

export const createReview =
  async (req, res) => {
    try {

      const review =
        await Review.create({
          studentId:
            req.user.id,
          courseId:
            req.params.courseId,
          rating:
            req.body.rating,
          comment:
            req.body.comment,
        });

      const reviews =
        await Review.find({
          courseId:
            req.params.courseId,
        });

      const avg =
        reviews.reduce(
          (sum, review) =>
            sum + review.rating,
          0
        ) / reviews.length;

      await Course.findByIdAndUpdate(
        req.params.courseId,
        {
          averageRating: avg,
        }
      );

      res.status(201)
        .json(review);

    } catch (error) {

      res.status(500)
        .json({
          message:
            error.message,
        });

    }
  };

export const getReviews =
  async (req, res) => {

    try {

      const reviews =
        await Review.find({
          courseId:
            req.params.courseId,
        }).populate(
          "studentId",
          "name"
        );

      res.json(reviews);

    } catch (error) {

      res.status(500)
        .json({
          message:
            error.message,
        });

    }
  };