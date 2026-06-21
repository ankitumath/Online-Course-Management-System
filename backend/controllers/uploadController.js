import cloudinary
from "../config/cloudinary.js";

export const uploadImage =
  async (req, res) => {

    try {

      const result =
        await cloudinary.uploader.upload(
          req.body.image,
          {
            folder:
              "oncourse",
          }
        );

      res.json({
        imageUrl:
          result.secure_url,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };