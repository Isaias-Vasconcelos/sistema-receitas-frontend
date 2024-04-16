import axios from "axios";

export const API_BACKEND = axios.create({
  baseURL:"http://localhost:5120/api"
})