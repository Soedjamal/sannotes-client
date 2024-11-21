import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { editTask } from "../../utils/todoUtils";

const EditForm = ({ todo, hasEdit }) => {
  const [value, setValue] = useState(todo.task);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      hasEdit();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      mutate({ id: todo.id, task: value });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Edit your task"
      />
      <button className="todo-btn-edit" type="submit">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
