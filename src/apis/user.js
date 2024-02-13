import axios from "../config/axios";

export const changePassword = (body) =>
  axios.patch("/auth/change-password", body);
