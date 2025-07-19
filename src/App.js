import React, { useState } from "react";
import { Input } from "./components/Input/Input";
import { TaskStage } from "./components/TaskStage/TaskStage";
import "./styles.css";

export default function App() {
  const stages = ["Backlog", "To Do", "Ongoing", "Done"];
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([{ id: 0, value: "value", stage: 0 }]);
  const createTaskHandler = () => {
    if (!inputValue) return;
    setTasks((tasks) => [
      ...tasks,
      { id: new Date(), value: inputValue, stage: 0 },
    ]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const moveTaskHandler = (id, direction) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          const newStage = task.stage + direction;
          return {
            ...task,
            stage: newStage,
          };
        }
        return task;
      })
    );
  };
  return (
    <div className="App">
      <h3>Task Tracker</h3>
      <Input
        setInputValue={setInputValue}
        inputValue={inputValue}
        createTaskHandler={createTaskHandler}
      />
      <div className="tasks-board">
        {stages.map((stage, i) => (
          <TaskStage
            name={stage}
            tasks={tasks}
            stage={i}
            deleteTask={deleteTask}
            moveTaskHandler={moveTaskHandler}
          />
        ))}
      </div>
    </div>
  );
}
