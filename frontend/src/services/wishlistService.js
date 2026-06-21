import axios from "axios";

const API =
  "http://localhost:5000/api/wishlist";

export const getWishlist =
  async (token) => {
    return await axios.get(
      API,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );
  };

export const addWishlist =
  async (
    courseId,
    token
  ) => {
    return await axios.post(
      `${API}/${courseId}`,
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );
  };

export const removeWishlist =
  async (
    courseId,
    token
  ) => {
    return await axios.delete(
      `${API}/${courseId}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );
  };