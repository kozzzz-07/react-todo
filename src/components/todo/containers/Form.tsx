import { FormEvent, useCallback, VFC } from "react";
import { useRecoilState } from "recoil";
import { useTaskId } from "../hooks/useTaskId";
import { Task } from "../models/todo";
import { InputArea } from "../presenters/InputArea";
import { todoState } from "../store/todoState";

export const Form: VFC = () => {
  console.log("Form Component");

  const { id, increment } = useTaskId();
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

      increment();

      const task: Task = {
        id,
        isDone: false,
        text: value,
      };

      console.log(task);

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
