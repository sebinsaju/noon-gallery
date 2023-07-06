import axios from "axios";
const baseURL = 'https://v1.nocodeapi.com/';
export const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
    }
})