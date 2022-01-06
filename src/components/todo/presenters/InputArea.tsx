import { ChangeEvent, FormEvent, VFC } from "react";
import styled from "styled-components";

type Props = {
  task: string;
  onChangeTask: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const InputArea: VFC<Props> = (props) => {
  console.log("InputArea Component");

  const { task, onChangeTask, handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" name="task" onChange={onChangeTask} />
      <button disabled={task === ""}>追加</button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  & :not(:first-child) {
    margin-left: 8px;
  }
`;
