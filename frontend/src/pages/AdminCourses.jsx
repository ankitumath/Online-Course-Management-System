import {
  uploadImage,
} from "../services/uploadService";

import { useEffect, useState } from "react";

import {
getCourses,
createCourse,
updateCourse,
deleteCourse,
} from "../services/courseService";

import { Link } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

function AdminCourses() {
const [courses, setCourses] =
useState([]);

const [uploading, setUploading] =
  useState(false);

const [editingId, setEditingId] =
useState(null);

const [formData, setFormData] =
useState({
title: "",
description: "",
category: "",
duration: "",
instructor: "",
thumbnail: "",
});

useEffect(() => {
fetchCourses();
}, []);

const fetchCourses =
async () => {
try {
const response =
await getCourses();

console.log(response.data);

    setCourses(
      response.data
    );
  } catch (error) {
    console.log(error);
  }
};

const handleChange = (
e
) => {
setFormData({
...formData,
[e.target.name]:
e.target.value,
});
};

const handleImageUpload =
  async (e) => {

    const file =
      e.target.files[0];

    if (!file) return;

    setUploading(true);

    const reader =
      new FileReader();

    reader.readAsDataURL(
      file
    );

    reader.onloadend =
      async () => {

        try {

          const response =
            await uploadImage(
              reader.result
            );

            console.log(response.data);

          setFormData({
            ...formData,
            thumbnail:
              response.data.imageUrl,
          });

        } catch (error) {

          console.log(error);

        } finally {

          setUploading(
            false
          );

        }
      };
  };

const handleSubmit =
async (e) => {
e.preventDefault();

console.log(
    "FORM DATA:",
    formData
  );

  try {
    if (editingId) {
      await updateCourse(
        editingId,
        formData
      );

      alert(
        "Course Updated Successfully"
      );
    } else {
      await createCourse(
        formData
      );

      alert(
        "Course Created Successfully"
      );
    }

    setFormData({
      title: "",
      description: "",
      category: "",
      duration: "",
      instructor: "",
      thumbnail: "",
    });

    setEditingId(null);

    fetchCourses();
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = (
course
) => {
setEditingId(
course._id
);

setFormData({
  title:
    course.title || "",
  description:
    course.description || "",
  category:
    course.category || "",
  duration:
    course.duration || "",
  instructor:
    course.instructor || "",
  thumbnail:
    course.thumbnail || "",
});

window.scrollTo({
  top: 0,
  behavior: "smooth",
});

};

const handleDelete =
async (id) => {
const confirmDelete =
window.confirm(
"Delete this course?"
);

  if (!confirmDelete)
    return;

  try {
    await deleteCourse(id);

    alert(
      "Course Deleted Successfully"
    );

    fetchCourses();
  } catch (error) {
    console.log(error);
  }
};

return ( <DashboardLayout> <div
     className="
       min-h-screen
       bg-slate-100
       dark:bg-slate-950
       p-8
       transition-colors
     "
   > <h1
       className="
         text-4xl
         font-bold
         mb-8
         text-slate-900
         dark:text-white
       "
     >
Manage Courses </h1>

    {/* Form */}

    <form
      onSubmit={
        handleSubmit
      }
      className="
        bg-white
        dark:bg-slate-800
        p-6
        rounded-xl
        shadow
        mb-10
      "
    >
      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={
            formData.title
          }
          onChange={
            handleChange
          }
          className="border p-3 rounded dark:bg-slate-700 dark:text-white"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={
            formData.category
          }
          onChange={
            handleChange
          }
          className="border p-3 rounded dark:bg-slate-700 dark:text-white"
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={
            formData.duration
          }
          onChange={
            handleChange
          }
          className="border p-3 rounded dark:bg-slate-700 dark:text-white"
        />

        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={
            formData.instructor
          }
          onChange={
            handleChange
          }
          className="border p-3 rounded dark:bg-slate-700 dark:text-white"
        />

        <div className="md:col-span-2">

  <label
    className="
      block
      mb-2
      font-semibold
    "
  >
    Course Thumbnail
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={
      handleImageUpload
    }
    className="
      w-full
      border
      p-3
      rounded
    "
  />

  {uploading && (
    <p className="mt-2">
      Uploading...
    </p>
  )}

  {formData.thumbnail && (
    <img
      src={
        formData.thumbnail
      }
      alt="Preview"
      className="
        mt-4
        h-40
        rounded-lg
        object-cover
      "
    />
  )}

</div>

        <textarea
          name="description"
          placeholder="Description"
          value={
            formData.description
          }
          onChange={
            handleChange
          }
          rows="4"
          className="border p-3 rounded dark:bg-slate-700 dark:text-white md:col-span-2"
        />
      </div>

      <button
        type="submit"
        className="
          mt-4
          bg-indigo-600
          text-white
          px-6
          py-3
          rounded-lg
        "
      >
        {editingId
          ? "Update Course"
          : "Create Course"}
      </button>
    </form>

    {/* Course List */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {courses.map(
        (course) => (
          <div
            key={
              course._id
            }
            className="
              bg-white
              dark:bg-slate-800
              p-5
              rounded-xl
              shadow
            "
          >

<img
  src={
    course.thumbnail?.trim()
      ? course.thumbnail
      : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  }
  alt={course.title}
  className="
    w-full
    h-48
    object-cover
    rounded-lg
    mb-4
  "
/>

            <h2
              className="
                font-bold
                text-xl
                dark:text-white
              "
            >
              {course.title}
            </h2>

            <p
              className="
                text-gray-600
                dark:text-gray-300
                mt-2
              "
            >
              {course.category}
            </p>

            <p
              className="
                mt-2
                dark:text-gray-300
              "
            >
              {course.duration}
            </p>

            <div className="flex gap-2 mt-4">

              <button
                onClick={() =>
                  handleEdit(
                    course
                  )
                }
                className="
                  bg-yellow-500
                  text-white
                  px-4
                  py-2
                  rounded-lg
                "
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDelete(
                    course._id
                  )
                }
                className="
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-lg
                "
              >
                Delete
              </button>

<Link
  to={`/admin/lessons/${course._id}`}
>
  <button
    className="
    mt-2
    bg-purple-600
    text-white
    px-4
    py-2
    rounded-lg
    "
  >
    Add Lessons
  </button>
</Link>
            </div>
          </div>
        )
      )}

    </div>
  </div>
</DashboardLayout>


);
}

export default AdminCourses;

