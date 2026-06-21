import User from "../models/User.js";
import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";

export const getDashboardStats =
  async (req, res) => {
    try {

      const totalStudents =
        await User.countDocuments();

      const totalCourses =
        await Course.countDocuments();

      const totalEnrollments =
        await Enrollment.countDocuments();

      const enrollments =
        await Enrollment.find();

      const totalProgress =
        enrollments.reduce(
          (sum, enrollment) =>
            sum +
            enrollment.progress,
          0
        );

      const averageCompletion =
        enrollments.length > 0
          ? Math.round(
              totalProgress /
                enrollments.length
            )
          : 0;

      res.status(200).json({
        totalStudents,
        totalCourses,
        totalEnrollments,
        averageCompletion,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };