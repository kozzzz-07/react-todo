import styled from "styled-components";
import { Form } from "./containers/Form";
import { List } from "./containers/List";

export const Todo = () => {
  console.log("Todo Component");

  return (
    <Page>
      <Form />
      <Hr />
      <List />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  padding: 32px;
`;

const Hr = styled.hr`
  width: 100%;
`;
