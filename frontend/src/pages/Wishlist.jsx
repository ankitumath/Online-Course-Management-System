import { useEffect, useState } from "react";

import DashboardLayout
from "../components/layout/DashboardLayout";

import {
  useAuth,
} from "../context/AuthContext";

import {
  getWishlist,
  removeWishlist,
} from "../services/wishlistService";

function Wishlist() {

  const { token } =
    useAuth();

  const [wishlist, setWishlist] =
    useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist =
    async () => {
      try {

        const response =
          await getWishlist(
            token
          );

        setWishlist(
          response.data
        );

      } catch (error) {
        console.log(error);
      }
    };

  const handleRemove =
    async (courseId) => {
      try {

        await removeWishlist(
          courseId,
          token
        );

        fetchWishlist();

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <DashboardLayout>

      <div
        className="
        min-h-screen
        bg-slate-100
        dark:bg-slate-950
        p-8
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          mb-8
          text-slate-900
          dark:text-white
          "
        >
          ❤️ My Wishlist
        </h1>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >
          {wishlist.map(
            (item) => (
              <div
                key={item._id}
                className="
                bg-white
                dark:bg-slate-800
                p-6
                rounded-2xl
                shadow-lg
                "
              >

                <h2
                  className="
                  text-2xl
                  font-bold
                  dark:text-white
                  "
                >
                  {
                    item.courseId
                      ?.title
                  }
                </h2>

                <p
                  className="
                  mt-2
                  text-slate-600
                  dark:text-slate-300
                  "
                >
                  {
                    item.courseId
                      ?.description
                  }
                </p>

                <button
                  onClick={() =>
                    handleRemove(
                      item.courseId._id
                    )
                  }
                  className="
                  mt-4
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  "
                >
                  Remove
                </button>

              </div>
            )
          )}
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Wishlist;