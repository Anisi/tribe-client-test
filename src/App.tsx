import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "App.scss";
import Home from "pages/home/Home";
import About from "pages/staticPages/About";
import Terms from "pages/staticPages/Terms";
import Help from "pages/staticPages/Help";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Register from "pages/Register";
import ProtectedRoute from "routes/ProtectedRoute";
import reactPaths from "routes/reactPaths";
import AuthContext from "store/auth-context";

function App() {
  const AuthCtx = useContext(AuthContext);
  const token = AuthCtx.token;

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!!token} />}>
          <Route path={reactPaths.home} element={<Home />} />
        </Route>
        <Route
          element={
            <ProtectedRoute isAllowed={!token} redirectPath={reactPaths.home} />
          }
        >
          <Route path={reactPaths.register} element={<Register />} />
          <Route path={reactPaths.login} element={<Login />} />
        </Route>
        <Route path={reactPaths.staticPages.about} element={<About />} />
        <Route path={reactPaths.staticPages.terms} element={<Terms />} />
        <Route path={reactPaths.staticPages.help} element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
