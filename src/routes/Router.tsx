import { VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Todo } from "../components/todo/Todo";
import { History } from "../components/history/History";
import App from "../App";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route path="/todo" element={<Todo />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};
