import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <AppStyle>
      {/* <Link to="/history">history</Link> */}
      <Outlet />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100vh;
`;

export default App;
