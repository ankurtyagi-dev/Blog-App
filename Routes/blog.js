import express from "express";
import createComment from "../Controllers/CommentController.js";
import createPost from "../Controllers/PostController.js";
import { getAllPosts } from "../Controllers/PostController.js";
import createLike from "../Controllers/LikeController.js";
import { unlikePost } from "../Controllers/LikeController.js";

const router = express.Router();
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.post("/likes/create", createLike);
router.post("/likes/unlike", unlikePost);
router.get("/posts", getAllPosts);



export default router;