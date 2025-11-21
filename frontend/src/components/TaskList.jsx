import api from "./api";
import "./TaskList.css";
function TaskList({ tasks, reloadTasks }) {

    const updateStatus = async (id, newStatus) => {
        await api.put(`/tasks/${id}/${newStatus}`);
        reloadTasks();
    };

    const deleteTask = async (id) => {
        await api.delete(`/tasks/${id}`);
        reloadTasks();
    }

    const styles = {
        table: {
            width: "100%",
            maxWidth: "900px",
            borderCollapse: "collapse",
            marginTop: "20px",
            background: "white",
            border: "1px solid #ccc",
        },
        select: { padding: "5px" }
    };



    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <table className="task-table" border="1">
            <thead>
            <tr>
                <th>Task ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Update Status</th>
                <th>Creation Time</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            {tasks.map(task => (
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.createdAT.substring(0,10)+" "+task.createdAT.substring(11,16)}</td>
                    <td>
                        <select
                            value={task.status}
                            onChange={(e) => updateStatus(task.id, e.target.value)}
                            style={styles.delete}
                        >
                            <option value="TODO">PENDING</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                        </select>
                    </td>

                    <td>
                        <input
                            type={"button"}
                            value={"DELETE"}
                            onClick={()=>deleteTask(task.id)}
                            style={styles.delete}
                        />

                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}



export default TaskList;
