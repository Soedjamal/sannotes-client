import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ todo, handleEdit, handleComplete, handleDelete }) => {
  return (
    <div className="Todo">
      <div className="todo-task">
        <p
          className={todo.completed ? "completed" : null}
          onClick={() => handleComplete(todo.id)}
        >
          {todo.task}
        </p>
      </div>

      <div className="icons">
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => handleEdit(todo.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
