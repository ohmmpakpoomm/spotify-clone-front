import { useState, createContext, useEffect } from "react";
import * as authApi from "../../../apis/auth";
import {
  removeToken,
  setToken,
  getToken,
  setLocalCode,
  removeSpotifyToken,
  removeLocalDeviceId,
  removeLocalCode,
} from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [codeForOAuth, setCodeForOAuth] = useState("");

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

  const logout = async () => {
    setAuthUser(null);
    removeToken();
    removeLocalCode();
    removeSpotifyToken();
    removeLocalDeviceId();
  };

  const deleteAccount = async (userId) => {
    try {
      await authApi.deleteUser(userId);
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  const changePassword = async (user) => {
    try {
      const res = await authApi.changePassword(user);
      return res;
    } catch (err) {
      return err;
    }
  };

  const getCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    setLocalCode(code);
    return code;
  };
  return (
    <AuthContext.Provider
      value={{
        authUser,
        register,
        login,
        logout,
        changePassword,
        codeForOAuth,
        getCode,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
