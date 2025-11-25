import { useEffect, useState } from "react";
import api from "./components/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";

function App() {
    const [tasks, setTasks] = useState([]);
    const [searchText, setSearchText] = useState("");

    const loadTasks = async () => {
        const res = await api.get("/tasks");
        setTasks(res.data);
    };

    const filteredTasks = tasks.filter(task =>
        (task.title || "").toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div
            style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <h1>Task Workflow</h1>

            <TaskForm onTaskAdded={loadTasks} />

            <div style={{ display: "flex", gap: "20px" }}>

                <button onClick={loadTasks} style={{
                    padding: "10px 10px",
                    width: "140px",
                    height: "50px",
                    textAlign: "center",
                }} >List All Tasks</button>
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
            </div>
            <div><p>Please wait for some time when opening first time(The backend machine is in shutdown state)</p></div>
            <TaskList tasks={filteredTasks} reloadTasks={loadTasks} />
        </div>
    );

}



export default App;

