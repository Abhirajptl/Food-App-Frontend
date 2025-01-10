import axios from "axios";

const API = axios.create({
  baseURL: "https://render.com/docs/web-services#port-binding",
});

export default API;