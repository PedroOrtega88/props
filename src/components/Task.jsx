import React from 'react';

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <li style={{cursor:'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.text}</span>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? 'Desmarcar' : 'Marcar'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;
