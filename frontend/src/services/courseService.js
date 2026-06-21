import axios from "axios";

const API =
  "http://localhost:5000/api/courses";

export const getCourses =
  async () => {
    return await axios.get(API);
  };

  export const getCourseById =
  async (id) => {
    return await axios.get(
      `${API}/${id}`
    );
  };

  export const createCourse =
  async (courseData) => {
    return await axios.post(
      API,
      courseData
    );
  };

  export const deleteCourse =
  async (id) => {
    return await axios.delete(
      `${API}/${id}`
    );
  };

export const updateCourse =
  async (id, data) => {
    return await axios.put(
      `${API}/${id}`,
      data
    );
  };