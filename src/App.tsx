import { Outlet } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <AppStyle>
      <Outlet />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100vh;
`;

export default App;
