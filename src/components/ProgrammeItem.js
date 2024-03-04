import React from 'react';

const ProgrammeItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </li>
  );
};

export default ProgrammeItem;
