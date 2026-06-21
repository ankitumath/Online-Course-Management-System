import axios from "axios";

const API =
  "https://online-course-management-system-as0l.onrender.com/api/reviews";

export const getReviews =
  async (courseId) => {
    return await axios.get(
      `${API}/${courseId}`
    );
  };

export const createReview =
  async (
    courseId,
    reviewData,
    token
  ) => {
    return await axios.post(
      `${API}/${courseId}`,
      reviewData,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );
  };