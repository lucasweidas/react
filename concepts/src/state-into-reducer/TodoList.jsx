import { useState } from 'react';

export default function TodoList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(task => {
        return <TodoTask key={task.id} {...task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />;
      })}
    </ul>
  );
}

function TodoTask({ id, text, done, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedText, setChangedText] = useState(text);
  const [isDone, setIsDone] = useState(done);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isDone}
          onChange={({ target }) => {
            onChangeTask({ id, text: changedText, done: target.checked });
            setIsDone(target.checked);
          }}
        />
        {isEditing ? <input type="text" value={changedText} onChange={({ target }) => setChangedText(target.value)} /> : <span>{text}</span>}
        {isEditing ? (
          <button
            onClick={() => {
              onChangeTask({ id, text: changedText, done: isDone });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDeleteTask(id)}>Delete</button>
      </label>
    </li>
  );
}
