import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { calculateRemainingTime } from "../utils/helpers";

type loginType = (token: string, expirationTime?: number) => void;
type logoutType = () => void;
interface AuthContextInterface {
  token: string | null;
  login: loginType;
  logout: logoutType;
}

const AuthContext = createContext<AuthContextInterface>({
  token: null,
  login: (token: string, expirationTime?: number) => {},
  logout: () => {},
});

let logoutTimer: ReturnType<typeof setTimeout>;

const retrieveStoredToken = () => {
  let storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("tokenExpirationDate");

  let remainingTime = null;
  if (storedExpirationDate) {
    remainingTime = calculateRemainingTime(parseInt(storedExpirationDate));

    if (remainingTime <= 3600) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpirationDate");
      storedToken = null;
    }
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider: React.FC<PropsWithChildren<{}>> = function ({
  children,
}) {
  const tokenData = retrieveStoredToken();

  const [token, setToken] = useState<string | null>(tokenData.token);

  const loginHandler: loginType = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);

    if (expirationTime) {
      localStorage.setItem("tokenExpirationDate", expirationTime.toString());
      // auto-logout user after token expiration
      const remainingTime = calculateRemainingTime(expirationTime);
      logoutTimer = setTimeout(logoutHandler, remainingTime);
    }
  };

  const logoutHandler: logoutType = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpirationDate");
    localStorage.removeItem("memberInfo");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData && tokenData.duration) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue: AuthContextInterface = {
    token,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export default AuthContext;
