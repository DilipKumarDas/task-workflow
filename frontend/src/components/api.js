import axios from "axios";

const api = axios.create({
    baseURL: "https://taskflow-backend-9m69.onrender.com"
});

export default api;
