import React from "react";
export const TaskCard = ({ task, moveTaskHandler, deleteTask }) => {
  return (
    <div className="task">
      <span>{task.value}</span>
      <span>
        <button
          disabled={task.stage === 0}
          className={task.stage === 0 ? "disabled-btn" : ""}
        >
          <span onClick={() => moveTaskHandler(task.id, -1)}>&larr;</span>
        </button>
        <button disabled={task.stage === 3} className="no-btn-style">
          <span onClick={() => moveTaskHandler(task.id, 1)}>&rarr;</span>
        </button>

        {/* <span>⬅️</span>
<span>➡️</span> */}
        <span className="delete" onClick={() => deleteTask(task.id)}>
          {" "}
          ❌
        </span>
      </span>
    </div>
  );
};
