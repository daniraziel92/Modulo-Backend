import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getAllTodosController,
  getTodoController,
  updateTodoController,
} from "../controllers/todo.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { logger } from "../middlewares/logger.middleware.js";

const todoRouter = express.Router();

todoRouter.use(verifyToken);
//Logger añadido
todoRouter.use(logger);

todoRouter.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

todoRouter.get("/getTodo", getTodoController);

todoRouter.get("/getAllTodos", getAllTodosController);

todoRouter.post("/createTodo", createTodoController);

//update Route
todoRouter.put("/updateTodo",updateTodoController);

//delete Route
todoRouter.delete("/deleteTodo",deleteTodoController);

export default todoRouter;
