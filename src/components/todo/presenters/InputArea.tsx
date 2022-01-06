import { ChangeEvent, FormEvent, useCallback, useState, VFC } from "react";
import styled from "styled-components";

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const InputArea: VFC<Props> = (props) => {
  console.log("InputArea Component");

  const { handleSubmit } = props;

  const [task, setTask] = useState("");

  const onChangeTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }, []);

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
        setTask("");
      }}
    >
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
