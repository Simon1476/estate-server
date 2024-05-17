import express from "express";
import {
  deleteUser,
  getUsers,
  savePost,
  updateUser,
  profilePosts,
  getNotificationNumber,
} from "../controllers/user";
import { verifyToken } from "../middleware/verifyToken";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.put("/:id", verifyToken, updateUser);
userRouter.delete(":/id", verifyToken, deleteUser);
userRouter.post("/save", verifyToken, savePost);
userRouter.get("/profilePosts", verifyToken, profilePosts);
userRouter.get("/notification", verifyToken, getNotificationNumber);

export default userRouter;
