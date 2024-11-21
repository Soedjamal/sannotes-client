import EditForm from "./EditNotes-04";
import TodoForm from "./NotesForm-04";
import Todo from "./Notes-04";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, fetchTodo } from "../../utils/todoUtils";
import { useState } from "react";

const TodoWrapper = () => {
  const [isEdit, setIsEdit] = useState(null);
  const { data: todos } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTodo,
  });

  const queryQlient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryQlient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleDelete = (id) => {
    mutate(id);
  };

  const handleEdit = (id) => {
    setIsEdit(id);
  };

  const hasEdit = () => {
    setIsEdit(null);
  };

  return (
    <div className="TodoWrapper">
      <h3 className="todos-title">TodoList</h3>
      <TodoForm />
      <div className="todo-lists">
        {todos?.map((todo, index) =>
          isEdit === todo.id ? (
            <EditForm key={todo.id} hasEdit={hasEdit} todo={todo} />
          ) : (
            <>
              <Todo
                key={index}
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </>
          ),
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
