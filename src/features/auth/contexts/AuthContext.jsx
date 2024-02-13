import { useState, createContext, useEffect } from "react";
import * as authApi from "../../../apis/auth";
import * as userApi from "../../../apis/user";
import { removeToken, setToken, getToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getToken()) {
      const getMe = async () => {
        try {
          const res = await authApi.getMe();
          setAuthUser(res.data.user);
        } catch (err) {
          console.log(err);
        }
      };
      getMe();
    }
  }, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    setToken(res.data.accessToken);
  };

  const login = async (input) => {
    const res = await authApi.login(input);
    setAuthUser(res.data.user);
    setToken(res.data.accessToken);
  };

  const logout = () => {
    setAuthUser(null);
    removeToken();
  };

  const changePassword = async (user) => {
    try {
      const res = await userApi.changePassword(user);
      return res;
    } catch (err) {
      return err;
    }
  };
  return (
    <AuthContext.Provider
      value={{ authUser, register, login, logout, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}
