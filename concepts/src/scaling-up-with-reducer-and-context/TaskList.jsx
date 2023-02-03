import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext';

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={({ target }) => {
            dispatch({ type: 'changed', changedTask: { ...task, done: target.checked } });
          }}
        />
        {isEditing ? (
          <input
            type="text"
            value={task.text}
            onChange={({ target }) => {
              dispatch({ type: 'changed', changedTask: { ...task, text: target.value } });
            }}
          />
        ) : (
          task.text
        )}
        {isEditing ? <button onClick={() => setIsEditing(false)}>Save</button> : <button onClick={() => setIsEditing(true)}>Edit</button>}
        <button onClick={() => dispatch({ type: 'deleted', id: task.id })}>Delete</button>
      </label>
    </li>
  );
}
