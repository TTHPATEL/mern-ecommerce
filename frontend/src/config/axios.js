import axios from "axios";
// import { REACT_APP_BASE_URL } from "../../utils/data.js";
export const axiosi = axios.create({
  withCredentials: true,
  baseURL: " http://localhost:8000/",
});
