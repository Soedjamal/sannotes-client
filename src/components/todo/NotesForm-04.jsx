import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getUser } from "../../utils/authUtils";
import { createTodo } from "../../utils/todoUtils";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const queryQlient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryQlient.invalidateQueries({ queryKey: ["tasks"] });

      setTask("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = getUser();

    const todo = {
      task,
      userId: user.id || 1,
    };

    if (task) {
      mutate(todo);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Add your task"
      />
      <button className="todo-btn" type="submit">
        {isPending ? "Add.." : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
