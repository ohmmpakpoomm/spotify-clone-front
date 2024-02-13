import axios from "../config/axios";

export const register = (user) => axios.post("/auth/register", user);

export const login = (body) => axios.post("/auth/login", body);

export const getMe = () => axios.get("/auth/me");
