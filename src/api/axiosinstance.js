import axios from "axios";

const instance = axios.create({
//baseURL: "http://localhost:8000", //USE this for local development. comment next line
//baseURL: "http://172.105.253.129:8000",
baseURL: "http://uplsnipe.com:8000",
  
});

export default instance;
