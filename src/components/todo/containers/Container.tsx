import { VFC, useState, useCallback, FormEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Task, TaskId } from "../models/todo";
import { InputArea } from "../presenters/InputArea";
import { Item } from "../presenters/Item";
import { todoState } from "../store/todoState";

export const Container: VFC = () => {
  console.log("Container Component");

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

  const onRemove = useCallback(
    (id: TaskId) => {
      setTodo(todo.filter((task) => task.id !== id));
    },
    [todo]
  );

  const toggleCheckBox = useCallback(
    (id: TaskId) => {
      const tasks = todo.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });

      setTodo(tasks);
    },
    [todo]
  );

  return (
    <>
      <InputArea handleSubmit={handleSubmit} />
      <Hr />
      <List>
        {todo.map((task) => (
          <Item
            key={task.id}
            task={task}
            toggleCheckBox={toggleCheckBox}
            onRemove={onRemove}
          />
        ))}
      </List>
    </>
  );
};

const Hr = styled.hr`
  width: 100%;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;
