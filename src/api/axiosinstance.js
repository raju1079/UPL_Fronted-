import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  /* headers:{
    'Content-Type': 'application/json',
    'x-api-key': 'ARSSNIPE'
  } */
});

 
/* instance.interceptors.request.use(
   (request) => {
    const accessToken = localStorage.getItem('token')
   if(accessToken){
  request.headers["x-api-token"] = accessToken;
   }
    return request;
  },
  (error) => {

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
); */

export default instance;
