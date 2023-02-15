import { memo, useMemo, useRef, useState } from 'react';

export default memo(function TodoList({ todos, filter, isDark, onChangeTask, onDeleteTask }) {
  const visibleTodos = useMemo(() => {
    return filterTodos(todos, filter);
  }, [todos, filter]);

  return (
    <ul style={{ backgroundColor: isDark ? '#000000' : '#e6e6e6', padding: '1rem' }}>
      {visibleTodos.map(task => {
        return <TodoTask key={task.id} {...task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />;
      })}
    </ul>
  );
});

const TodoTask = memo(function TodoTask({ id, text, done, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedText, setChangedText] = useState(text);
  const [isDone, setIsDone] = useState(done);

  function handleDoneChange({ target }) {
    onChangeTask({ id, text: changedText, done: target.checked });
    setIsDone(target.checked);
  }

  function handleChangedText({ target }) {
    setChangedText(target.value);
  }

  function handleSaveEdit() {
    onChangeTask({ id, text: changedText, done: isDone });
    setIsEditing(false);
  }

  function handleStartEdit() {
    setIsEditing(true);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={isDone} onChange={handleDoneChange} />
        {!isEditing && <span>{text}</span>}
      </label>
      {isEditing && <input type="text" value={changedText} onChange={handleChangedText} />}
      {isEditing ? <button onClick={handleSaveEdit}>Save</button> : <button onClick={handleStartEdit}>Edit</button>}
      <button onClick={handleDeleteTask}>Delete</button>
    </li>
  );
});

function filterTodos(todos, filter) {
  if (filter === 'all') {
    return [...todos];
  }

  return todos.filter(task => {
    if (filter === 'active') {
      return !task.done;
    }
    if (filter === 'completed') {
      return task.done;
    }
  });
}
