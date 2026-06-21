import axios from "axios";

const API =
  "https://online-course-management-system-as0l.onrender.com/api/history";

export const saveHistory =
  async (
    data,
    token
  ) => {
    return await axios.post(
      API,
      data,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );
  };

export const getHistory =
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