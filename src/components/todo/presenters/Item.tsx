import { memo, VFC } from "react";
import styled from "styled-components";
import { Task, TaskId } from "../models/todo";

type Props = {
  task: Task;
  toggleCheckBox: (id: TaskId) => void;
  onRemove: (id: TaskId) => void;
};

export const Item: VFC<Props> = memo((props) => {
  console.log("Item Component");

  const { task, toggleCheckBox, onRemove } = props;

  return (
    <SItem>
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
    </SItem>
  );
});

const SItem = styled.li`
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
