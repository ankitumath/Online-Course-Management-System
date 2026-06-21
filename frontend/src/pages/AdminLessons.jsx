import { useState } from "react";
import { useParams } from "react-router-dom";

import { createLesson }
from "../services/lessonService";

import DashboardLayout
from "../components/layout/DashboardLayout";

function AdminLessons() {

  const { courseId } =
    useParams();

  const [title, setTitle] =
    useState("");

  const [videoUrl,
    setVideoUrl] =
    useState("");

  const [order,
    setOrder] =
    useState(1);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await createLesson({
          courseId,
          title,
          videoUrl,
          order,
        });

        alert(
          "Lesson Added"
        );

        setTitle("");
        setVideoUrl("");

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <DashboardLayout>

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          Add Lesson
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="
          space-y-4
          max-w-xl
          "
        >

          <input
            type="text"
            placeholder="Lesson Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="
            w-full
            border
            p-3
            rounded-lg
            "
          />

          <input
            type="text"
            placeholder="Video URL"
            value={videoUrl}
            onChange={(e) =>
              setVideoUrl(
                e.target.value
              )
            }
            className="
            w-full
            border
            p-3
            rounded-lg
            "
          />

          <input
            type="number"
            placeholder="Order"
            value={order}
            onChange={(e) =>
              setOrder(
                Number(
                  e.target.value
                )
              )
            }
            className="
            w-full
            border
            p-3
            rounded-lg
            "
          />

          <button
            className="
            bg-indigo-600
            text-white
            px-6
            py-3
            rounded-lg
            "
          >
            Add Lesson
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
}

export default AdminLessons;