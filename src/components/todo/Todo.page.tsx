import { ChangeEvent, useCallback, useState } from "react";
import { FormEvent } from "react";
import styled from "styled-components";

import { Task, TaskId } from "./models/todo";
import { InputArea } from "./presenters/InputArea";
import { Item } from "./presenters/Item";

export const Todo = () => {
  console.log("Todo Component");

  const [task, setTask] = useState("");
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState<Task[]>([]);

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
      setTask("");
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

  const onChangeTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }, []);

  return (
    <Container>
      <InputArea
        handleSubmit={handleSubmit}
        onChangeTask={onChangeTask}
        task={task}
      />
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  padding: 32px;
`;

const Form = styled.form`
  display: flex;
  & :not(:first-child) {
    margin-left: 8px;
  }
`;

const Hr = styled.hr`
  width: 100%;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;
