import myAPI from "../config/myAPI";

export const changePassword = (body) =>
  myAPI.patch("/auth/change-password", body);
