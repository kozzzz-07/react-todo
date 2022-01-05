import { ChangeEvent, useCallback, useState } from "react";
import { FormEvent } from "react";
import styled from "styled-components";

import { Task, TaskId } from "./models/todo";

export const Todo = () => {
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState<Task[]>([]);

  console.log(todo);

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

  const onChangeTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="task" onChange={onChangeTask} />
        <button disabled={task === ""}>追加</button>
      </Form>
      <Hr />
      <List>
        {todo.map((task) => (
          <Item key={task.id}>
            <input
              id={`${task.id}`}
              type="checkbox"
              onChange={() => toggleCheckBox(task.id)}
              checked={task.isDone}
            />
            <label htmlFor={`${task.id}`} className="task">
              {task.text}
            </label>
            <button onClick={() => onRemove(task.id)}>削除</button>
          </Item>
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

const Item = styled.li`
  display: flex;
  padding: 8px;
  width: 500px;

  & .text {
    max-width: 400px;
  }

  & :not(:first-child) {
    margin-left: 8px;
  }

  & :last-child {
    margin-left: auto;
  }

  & :checked ~ .task {
    text-decoration: line-through;
    color: gray;
  }

  & input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }
`;
