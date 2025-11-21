import axios from "axios";

const api = axios.create({
    baseURL: "task-workflow.up.railway.app:8080"
});

export default api;
