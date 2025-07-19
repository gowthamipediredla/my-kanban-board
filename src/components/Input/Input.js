import React from "react";
function Input({ inputValue, setInputValue, createTaskHandler }) {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button-style" onClick={createTaskHandler}>
        Create Task
      </button>
    </div>
  );
}

export { Input };
