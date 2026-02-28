import axios from "axios";
import { useEffect, useState } from "react";

const DashboardData = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    axios.get("https://task-api-eight-flax.vercel.app/api/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => setTasks(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {tasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default DashboardData;