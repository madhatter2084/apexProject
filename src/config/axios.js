import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.mozambiquehe.re/",
});

export default instance;
