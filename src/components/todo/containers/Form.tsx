import { FormEvent, useCallback, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import { Task } from "../models/todo";
import { InputArea } from "../presenters/InputArea";
import { todoState } from "../store/todoState";

export const Form: VFC = () => {
  console.log("Form Component");

  const [id, setId] = useState(0);
  const [todo, setTodo] = useRecoilState(todoState);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // え、これでいいの!?
      const value = (
        e.target as typeof e.target & {
          task: { value: string };
        }
      ).task.value;

      const nextId = id + 1;
      setId(nextId);

      const task: Task = {
        id: nextId,
        isDone: false,
        text: value,
      };

      setTodo([...todo, task]);

      (
        e.target as typeof e.target & {
          task: { value: string };
        }
      ).task.value = "";
    },
    [id, todo]
  );

  return <InputArea handleSubmit={handleSubmit} />;
};
