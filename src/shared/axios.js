import axios from 'axios'; // handle the http request, connect the backend and frontend ports

const lmsAPIHostProd = "http://api.lms.net";
const lmsAPIHostDev = "http://localhost:3001";  //port for backend
const lmsAPIHost = process.env.NODE_ENV === "development" ? lmsAPIHostDev : lmsAPIHostProd;

const instance = axios.create({
    baseURL: lmsAPIHost
});

export default instance;