import axios from "axios";

const API =
  "http://localhost:5000/api/upload";

export const uploadImage =
  async (image) => {

    return await axios.post(
      API,
      {
        image,
      }
    );
  };