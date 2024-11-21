import axiosInstance from "../lib/axios";
import { getUser } from "./authUtils";

export const fetchTodo = async () => {
  const user = getUser();
  const todos = await axiosInstance.get(`/user?username=${user.username}`);
  return todos.data.todos;
};

export const createTodo = async (todo) => {
  const response = await axiosInstance.post("/todos", todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axiosInstance.delete(`/todos/${id}`);
};

export const editTask = async ({ id, task }) => {
  const response = await axiosInstance.patch(`/todos/${id}`, { task });
  return response.data;
};
