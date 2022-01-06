import styled from "styled-components";
import { Container } from "./containers/Container";

export const Todo = () => {
  console.log("Todo Component");

  return (
    <Page>
      <Container />
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
