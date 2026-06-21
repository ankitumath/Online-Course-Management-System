import axios from "axios";

const API =
  "https://online-course-management-system-as0l.onrender.com/api/upload";

export const uploadImage =
  async (image) => {

    return await axios.post(
      API,
      {
        image,
      }
    );
  };