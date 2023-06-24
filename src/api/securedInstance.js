import axios from "axios";
//const BASE_URL = 'http://localhost:8000' //USE this for local development. comment next line
const BASE_URL = "http://172.105.253.129:8000" 

const securedInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export default securedInstance;
