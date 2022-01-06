import { useCallback, VFC } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TaskId } from "../models/todo";
import { Item } from "../presenters/Item";
import { todoState } from "../store/todoState";

export const List: VFC = () => {
  console.log("List Component");
  const [todo, setTodo] = useRecoilState(todoState);

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
    <Ul>
      {todo.map((task) => (
        <Item
          key={task.id}
          task={task}
          toggleCheckBox={toggleCheckBox}
          onRemove={onRemove}
        />
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;
