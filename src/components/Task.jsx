import React from 'react';

const Task = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.text}</span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Desmarcar' : 'Marcar'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;
