import Enrollment from "../models/Enrollment.js";


// Enroll Student
export const enrollCourse =
  async (req, res) => {
    try {

      const {
        studentId,
        courseId,
      } = req.body;

      const existing =
        await Enrollment.findOne({
          studentId,
          courseId,
        });

      if (existing) {
        return res
          .status(400)
          .json({
            message:
              "Already enrolled",
          });
      }

      const enrollment =
        await Enrollment.create({
          studentId,
          courseId,
        });

      res.status(201).json(
        enrollment
      );

    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

  export const getMyEnrollments =
  async (req, res) => {
    try {
      const enrollments =
        await Enrollment.find({
          studentId:
            req.user.id,
        }).populate(
          "courseId"
        );

      res.status(200).json(
        enrollments
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

  export const updateProgress =
  async (req, res) => {
    try {

      const { progress } =
        req.body;

      const enrollment =
        await Enrollment.findByIdAndUpdate(
          req.params.id,
          {
            progress,
          },
          {
            new: true,
          }
        );

      res.status(200).json(
        enrollment
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };