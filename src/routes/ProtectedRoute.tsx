import { Navigate, Outlet } from "react-router-dom";
import { PropsWithChildren } from "react";

type Props = {
  isAllowed: boolean;
  redirectPath?: string;
};

const ProtectedRoute: React.FC<PropsWithChildren<Props>> = ({
  isAllowed,
  redirectPath = "/login",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
