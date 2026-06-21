import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import {
  getCourseById,
} from "../services/courseService";

import {
  enrollCourse,
} from "../services/enrollmentService";

import {
  useAuth,
} from "../context/AuthContext";

import {
  addWishlist,
} from "../services/wishlistService";

import {
  getReviews,
  createReview,
} from "../services/reviewService";

function CourseDetails() {
  const { id } =
    useParams();

     const { user, token } = useAuth();

  const [course, setCourse] =
    useState(null);

    const [reviews, setReviews] =
  useState([]);

  const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce(
          (sum, review) =>
            sum +
            review.rating,
          0
        ) /
        reviews.length
      ).toFixed(1)
    : 0;

const [rating, setRating] =
  useState(5);

const [comment, setComment] =
  useState("");

  useEffect(() => {
    fetchCourse();
    fetchReviews();
  }, []);

  const fetchCourse =
    async () => {
      try {
        const response =
          await getCourseById(id);

        setCourse(
          response.data
        );
      } catch (error) {
        console.log(error);
      }
    };

    const fetchReviews =
  async () => {
    try {

      const response =
        await getReviews(id);

      setReviews(
        response.data
      );

    } catch (error) {

      console.log(error);

    }
  };

  if (!course) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  const handleEnroll = async () => {
  try {

    const token =
      localStorage.getItem(
        "token"
      );

    await enrollCourse(
      user.id,
      course._id,
      token
    );

    alert(
      "Enrollment Successful"
    );

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Enrollment Failed"
    );

  }
};

const handleWishlist =
  async () => {
    try {

      await addWishlist(
        course._id,
        token
      );

      alert(
        "Added to Wishlist"
      );

    } catch (error) {

      alert(
        error.response?.data
          ?.message ||
        "Failed to add"
      );

    }
  };

const handleReview =
  async () => {
    try {

      await createReview(
        course._id,
        {
          rating,
          comment,
        },
        token
      );

      setComment("");

      fetchReviews();

      alert(
        "Review Added"
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <motion.div
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        bg-gradient-to-r
        from-indigo-600
        to-purple-600
        text-white
        p-10
        "
      >
        <h1
          className="
          text-5xl
          font-bold
          "
        >
          {course.title}
        </h1>

        <p
          className="
          mt-4
          text-lg
          "
        >
          {course.description}
        </p>
      </motion.div>

      <div
        className="
        max-w-6xl
        mx-auto
        p-8
        "
      >
        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          "
        >

          <img
            src={
              course.thumbnail
            }
            alt={course.title}
            className="
            rounded-2xl
            shadow-xl
            "
          />

          <div>

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Course Overview
            </h2>

            <div
              className="
              mt-6
              space-y-4
              "
            >
              <p>
                <strong>
                  Instructor:
                </strong>{" "}
                {
                  course.instructor
                }
              </p>

              <p>
                <strong>
                  Category:
                </strong>{" "}
                {
                  course.category
                }
              </p>

              <p>
                <strong>
                  Duration:
                </strong>{" "}
                {
                  course.duration
                }
              </p>
            </div>

            <div className="mt-8">

              <div
  className="
  mt-8
  bg-yellow-100
  dark:bg-yellow-900
  p-4
  rounded-xl
  "
>
  <h2
    className="
    text-2xl
    font-bold
    "
  >
    ⭐ {averageRating}/5
  </h2>

  <p>
    Based on
    {" "}
    {reviews.length}
    {" "}
    reviews
  </p>
</div>

  <h2 className="text-2xl font-bold mb-4">
    Write Review
  </h2>

  <select
    value={rating}
    onChange={(e) =>
      setRating(
        Number(
          e.target.value
        )
      )
    }
    className="
      border
      p-2
      rounded
      mr-3
    "
  >
    <option value="5">
      ⭐⭐⭐⭐⭐
    </option>

    <option value="4">
      ⭐⭐⭐⭐
    </option>

    <option value="3">
      ⭐⭐⭐
    </option>

    <option value="2">
      ⭐⭐
    </option>

    <option value="1">
      ⭐
    </option>
  </select>

  <textarea
    value={comment}
    onChange={(e) =>
      setComment(
        e.target.value
      )
    }
    placeholder="Write your review..."
    className="
      w-full
      border
      p-3
      rounded-lg
      mt-3
    "
  />

  <button
    onClick={
      handleReview
    }
    className="
      mt-3
      bg-indigo-600
      text-white
      px-4
      py-2
      rounded-lg
    "
  >
    Submit Review
  </button>

</div>

<div className="mt-10">

  <h2 className="text-2xl font-bold mb-4">
    Student Reviews
  </h2>

  {reviews.map(
    (review) => (

      <div
        key={review._id}
        className="
          border
          p-4
          rounded-lg
          mb-3
        "
      >

        <h3 className="font-bold">
          {
            review.studentId
              ?.name
          }
        </h3>

        <p>
          {"⭐".repeat(
            review.rating
          )}
        </p>

        <p>
          {
            review.comment
          }
        </p>

      </div>

    )
  )}

</div>

            <button
  onClick={
    handleEnroll
  }
  className="
  mt-8
  bg-indigo-600
  hover:bg-indigo-700
  text-white
  px-6
  py-3
  rounded-xl
  transition
  "
>
  Enroll Now
</button>

<button
  onClick={
    handleWishlist
  }
  className="
    mt-4
    ml-4
    bg-pink-600
    hover:bg-pink-700
    text-white
    px-6
    py-3
    rounded-xl
    transition
  "
>
  ❤️ Add To Wishlist
</button>

{/* <button
  onClick={
    handleWishlist
  }
  className="
    mt-4
    ml-4
    bg-pink-600
    text-white
    px-6
    py-3
    rounded-xl
  "
>
  ❤️ Wishlist
</button> */}

          </div>

        </div>
      </div>
    </div>
  );
}

export default CourseDetails;