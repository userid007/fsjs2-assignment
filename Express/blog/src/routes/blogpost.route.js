import { Router } from "express";
import {
  createBlogpost,
  updateBlogpost,
  deleteBlogpost,
  getAllBlogposts,
} from "../controllers/blogpost.controller.js";

const router = Router();

router.post("/", createBlogpost);
router.put("/:id", updateBlogpost);
router.delete("/:id", deleteBlogpost);
router.get("/", getAllBlogposts);

export default router;
