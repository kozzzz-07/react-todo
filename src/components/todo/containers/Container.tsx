import { VFC } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import { List } from "./List";

export const Container: VFC = () => {
  console.log("Container Component");

  return (
    <>
      <Form />
      <Hr />
      <List />
    </>
  );
};

const Hr = styled.hr`
  width: 100%;
`;
