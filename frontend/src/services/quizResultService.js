import axios from "axios";

const API =
  "http://localhost:5000/api/results";

export const saveResult =
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

export const getResults =
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