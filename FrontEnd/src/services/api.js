import axios from 'axios';

export const api = axios.create({
  baseURL: "http://13.59.130.220:8080/",
});
