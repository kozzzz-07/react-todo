import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/history">history</Link>
      <Outlet />
    </>
  );
}

export default App;
