import WatchHistory
from "../models/WatchHistory.js";

export const saveWatchHistory =
  async (req, res) => {

    try {

      const history =
        await WatchHistory.findOneAndUpdate(
          {
            studentId:
              req.user.id,

            courseId:
              req.body.courseId,
          },

          {
            lessonId:
              req.body.lessonId,

            watchedAt:
              new Date(),
          },

          {
            upsert: true,
            new: true,
          }
        );

      res.json(history);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

export const getWatchHistory =
  async (req, res) => {

    try {

      const history =
        await WatchHistory.find({
          studentId:
            req.user.id,
        })
          .populate(
            "courseId"
          )
          .populate(
            "lessonId"
          );

      res.json(history);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };