import axios from "axios";

const API =
  "http://localhost:5000/api/history";

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