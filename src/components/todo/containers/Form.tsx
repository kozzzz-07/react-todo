import { VFC } from "react";
import styled from "styled-components";
import { useSubmit } from "../hooks/useSubmit";
import { InputArea } from "../presenters/InputArea";

export const Form: VFC = () => {
  console.log("Form Component");

  const { handleSubmit } = useSubmit();

  return (
    <SForm onSubmit={handleSubmit}>
      <InputArea />
    </SForm>
  );
};

const SForm = styled.form`
  display: flex;
  & :not(:first-child) {
    margin-left: 8px;
  }
`;
