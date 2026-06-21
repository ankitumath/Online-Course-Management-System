import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getLessons,
} from "../services/lessonService";

import { useAuth }
from "../context/AuthContext";

import {
  saveHistory,
} from "../services/watchHistoryService";

import { Link }
from "react-router-dom";





function CoursePlayer() {
    const { token } =
  useAuth();

  const { id } =
    useParams();

  const [lessons, setLessons] =
    useState([]);

  const [currentVideo,
    setCurrentVideo] =
    useState("");

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons =
    async () => {

      const response =
        await getLessons(id);

      setLessons(
        response.data
      );

      if (
        response.data.length
      ) {
        setCurrentVideo(
          response.data[0]
            .videoUrl
        );
      }
    };

    const handleLessonClick =
  async (lesson) => {

     handleLessonClick(
    lesson
    );

    try {

      await saveHistory(
        {
          courseId: id,
          lessonId:
            lesson._id,
        },
        token
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Course Player
      </h1>

      <video
        controls
        className="
          w-full
          rounded-xl
        "
        src={currentVideo}
      />

      <Link
  to={`/quiz/${id}`}
>
  <button
    className="
    mt-6
    bg-green-600
    text-white
    px-6
    py-3
    rounded-lg
    "
  >
    Attempt Quiz
  </button>
</Link>

      <div className="mt-8">

        {lessons.map(
          (lesson) => (

            <button
              key={lesson._id}
              onClick={() =>
                setCurrentVideo(
                  lesson.videoUrl
                )
              }
              className="
                block
                w-full
                text-left
                p-4
                border
                mb-2
              "
            >
              {lesson.title}
            </button>
            

          )
        )}

      </div>

    </div>
  );
}

export default CoursePlayer;