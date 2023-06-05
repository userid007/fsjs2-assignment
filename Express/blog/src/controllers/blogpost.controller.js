import Blogpost from "../models/blogpost.schema.js";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customError.js";

export const createBlogpost = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  if (!title) {
    throw new CustomError("Title is required", 400);
  }
  if (!body) {
    throw new CustomError("Body is required", 400);
  }

  const blogpost = await Blogpost.create({ title, body });

  res.status(200).json({
    success: true,
    message: "Blogpost was created successfully",
    blogpost,
  });
});

export const updateBlogpost = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  const { id: blogpostId } = req.params;
  if (!title) {
    throw new CustomError("Title is required", 400);
  }
  if (!body) {
    throw new CustomError("Body is required", 400);
  }

  const updatedBlogpost = await Blogpost.findByIdAndUpdate(
    blogpostId,
    { title, body },
    { new: true, runValidators: true }
  );

  if (!updatedBlogpost) {
    throw new CustomError("Blogpost not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Blogpost updated successfully",
    updatedBlogpost,
  });
});

export const deleteBlogpost = asyncHandler(async (req, res) => {
  const { id: blogpostId } = req.params;
  const blogpostToDelete = await Blogpost.findByIdAndDelete(blogpostId);
  if (!blogpostToDelete) {
    throw new CustomError("Blogpost to be deleted not found", 400);
  }

  res.status(200).json({
    success: true,
    message: "Blogpost deleted successfully",
  });
});

export const getAllBlogposts = asyncHandler(async (_req, res) => {
  const blogposts = await Blogpost.find();

  if (!blogposts) {
    throw new CustomError("No blogposts found", 404);
  }

  res.status(200).json({
    success: true,
    blogposts,
  });
});
