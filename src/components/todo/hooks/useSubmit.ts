import { useCallback, FormEvent } from "react";
import { useRecoilState } from "recoil";
import { Task } from "../models/todo";
import { todoState } from "../store/todoState";
import { useTaskId } from "./useTaskId";

export const useSubmit = () => {
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

      setTodo([...todo, task]);

      // この辺が辛い
      (
        e.target as typeof e.target & {
          task: { value: string };
        }
      ).task.value = "";
    },
    [id, todo]
  );

  return { handleSubmit };
};
