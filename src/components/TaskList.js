import React from "react";
import TaskItem from "./TaskItem";
function TaskList({
  tasks,
  ShowinComplete,
  setTaskStatus,
  removeTask,
  handleChecked,
}) {
  return (
    <div>
      <ul className="task-list">
        {tasks
          .filter((task) => (ShowinComplete ? task.status !== 1 : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={ShowinComplete}
          onChange={handleChecked}
        />
      </div>
    </div>
  );
}

export default TaskList;
