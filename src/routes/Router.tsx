import { VFC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Todo } from "../components/todo/Todo.page";
import App from "../App";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Todo />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
