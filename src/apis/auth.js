import myAPI from "../config/myAPI";

export const register = (user) => myAPI.post("/auth/register", user);

export const login = (body) => myAPI.post("/auth/login", body);

export const getMe = () => myAPI.get("/auth/me");

export const changePassword = (body) =>
  myAPI.patch("/auth/change-password", body);

export const deleteUser = (userId) => myAPI.delete(`/auth/delete/${userId}`);
