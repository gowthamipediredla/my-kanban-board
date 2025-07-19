import React from "react";
import { TaskCard } from "./TaskCard";
function TaskStage({ name, tasks = [], stage, deleteTask, moveTaskHandler }) {
  return (
    <div className="task-stage">
      <h3>{name}</h3>
      <div>
        {tasks
          .filter((task) => task.stage === stage)
          .map((task) => (
            <TaskCard
              task={task}
              deleteTask={deleteTask}
              moveTaskHandler={moveTaskHandler}
            />
          ))}
      </div>
    </div>
  );
}

export { TaskStage };
