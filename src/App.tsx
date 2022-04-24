import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import reactPaths from "./routes/reactPaths";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path={reactPaths.home} element={<Home />} />
          <Route path={reactPaths.register} element={<Register />} />
          <Route path={reactPaths.login} element={<Login />} />
          {/* <Route path="/*" element={<UserRoutes />} /> */}
          <Route path="*" element={<div>404!</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
