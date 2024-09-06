import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css";

function App() {
  const [tasks, settasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 1 },
  ]);
  const [ShowinComplete, setShowinComplete] = useState(false);
  const [newTask, setnewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      settasks([...tasks, task]);
      setnewTask("");
    }
  };
  const handleInputChange = (e) => {
    setnewTask(e.target.value);
  };
  const handleChecked = (e) => {
    setShowinComplete(e.target.checked);
  };
  const setTaskStatus = (taskId, status) => {
    settasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: status ? 1 : 0 } : task
      )
    );
  };
  const removeTask = (taskId) => {
    settasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get Things Done" />
      <TaskList
        tasks={tasks}
        ShowinComplete={ShowinComplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        handleChecked={handleChecked}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
