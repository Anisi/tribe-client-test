import React, { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "App.scss";
import NotFound from "pages/NotFound";
import ProtectedRoute from "routes/ProtectedRoute";
import reactPaths from "routes/reactPaths";
import AuthContext from "store/auth-context";
import Loading from "components/ui/Loading";

const Home = React.lazy(() => import('pages/home/Home'));
const Story = React.lazy(() => import('pages/Story'));
const About = React.lazy(() => import('pages/staticPages/About'));
const Terms = React.lazy(() => import('pages/staticPages/Terms'));
const Help = React.lazy(() => import('pages/staticPages/Help'));
const Login = React.lazy(() => import('pages/Login'));
const Register = React.lazy(() => import('pages/Register'));

function App() {
  const AuthCtx = useContext(AuthContext);
  const token = AuthCtx.token;

  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!!token} />}>
          <Route path={reactPaths.home} element={<Home />} />
          <Route path={reactPaths.stories.show} element={<Story />} />
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
    </Suspense>
  );
}

export default App;
