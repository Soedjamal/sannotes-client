import React, { useEffect } from "react";
import TodoWrapper from "../components/todo/NotesWrapper-04";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <TodoWrapper />
    </>
  );
};

export default TodoList;
