import { useState } from "react";
import api from "./api";

function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/tasks", {title,description});
        setTitle("");
        setDescription("");
        onTaskAdded();
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
                required
            />

            <textarea
                placeholder="Task description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                style={styles.input}
                required
            />
            <button type="submit" style={styles.button}>Add Task</button>
        </form>
    );
}

const styles = {
    form: { display: "flex", gap: "10px", marginBottom: "20px" },
    input: { padding: "10px", width: "250px" },
    select: { padding: "10px" },
    button: { padding: "10px 20px", cursor: "pointer" }
};

export default TaskForm;
