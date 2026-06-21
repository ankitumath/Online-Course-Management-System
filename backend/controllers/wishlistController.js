import Wishlist from "../models/Wishlist.js";

export const addToWishlist =
  async (req, res) => {
    try {
      const exists =
        await Wishlist.findOne({
          studentId:
            req.user.id,
          courseId:
            req.params.courseId,
        });

      if (exists) {
        return res.status(400)
          .json({
            message:
              "Already in wishlist",
          });
      }

      const wishlist =
        await Wishlist.create({
          studentId:
            req.user.id,
          courseId:
            req.params.courseId,
        });

      res.status(201)
        .json(wishlist);

    } catch (error) {
      res.status(500)
        .json({
          message:
            error.message,
        });
    }
  };

export const getWishlist =
  async (req, res) => {
    try {

      const wishlist =
        await Wishlist.find({
          studentId:
            req.user.id,
        }).populate(
          "courseId"
        );

      res.json(wishlist);

    } catch (error) {
      res.status(500)
        .json({
          message:
            error.message,
        });
    }
  };

export const removeWishlist =
  async (req, res) => {
    try {

      await Wishlist.findOneAndDelete({
        studentId:
          req.user.id,
        courseId:
          req.params.courseId,
      });

      res.json({
        message:
          "Removed",
      });

    } catch (error) {
      res.status(500)
        .json({
          message:
            error.message,
        });
    }
  };