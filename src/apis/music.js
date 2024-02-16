import myAPI from "../config/myAPI";

export const addTrack = (data) => myAPI.post("/musics", data);
