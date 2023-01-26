import { createContext, useContext, useState } from 'react';

const TasksContext = createContext([]);
let idCount;

(() => {
  idCount = sessionStorage.getItem('idCount');
  if (idCount) return;
  idCount = 0;
  updateIdCount(0);
  updateTasks([]);
})();

export default function Todo() {
  const [tasks, setTasks] = useState(getTasks() ?? []);

  return (
    <>
      <TasksContext.Provider value={{ tasks, setTasks }}>
        <Form />
        {tasks.length > 0 && <TodoList />}
      </TasksContext.Provider>
    </>
  );
}

function Form() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [taskValue, setTaskValue] = useState('');
  const handleChange = ({ target }) => setTaskValue(target.value);
  const handleSubmit = e => {
    e.preventDefault();
    const task = { text: taskValue, id: idCount++, isCompleted: false };
    tasks.push(task);
    updateIdCount(idCount);
    saveTask(task);
    setTasks([...tasks]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskValue} onChange={handleChange} />
      <button type="submit">Add task</button>
    </form>
  );
}

function TodoList() {
  const { tasks } = useContext(TasksContext);
  let listItems = [];
  for (const task of tasks) {
    listItems.push(<TodoTask key={task.id} {...task} />);
  }

  return <ul style={{ listStyle: 'none', padding: '0' }}>{listItems}</ul>;
}

function TodoTask({ text, id, isCompleted: completed }) {
  const { setTasks } = useContext(TasksContext);
  const [isCompleted, setIsCompleted] = useState(!!completed);
  const handleCompletion = ({ target }) => {
    const { checked } = target;
    updateTask(id, 'isCompleted', checked);
    setIsCompleted(checked);
  };
  const handleDelete = () => setTasks(deleteTask(id));

  return (
    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <label
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <input type="checkbox" value={isCompleted} checked={isCompleted} onChange={handleCompletion} />
        <span style={{ textDecoration: isCompleted ? '1px solid line-through' : 'none', opacity: isCompleted ? '0.6' : '1' }}>{text}</span>
      </label>
      <button onClick={handleDelete}>X</button>
    </li>
  );
}

function getTasks() {
  return JSON.parse(sessionStorage.getItem('tasks'));
}

function updateTasks(tasks) {
  sessionStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateIdCount(idCount) {
  sessionStorage.setItem('idCount', idCount);
}

function updateTask(id, property, newValue) {
  const tasks = getTasks();
  for (const task of tasks) {
    if (task.id !== id) continue;
    task[property] = newValue;
    return void updateTasks(tasks);
  }
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  updateTasks(tasks);
}

function deleteTask(id) {
  const tasks = getTasks();
  for (const [key, task] of tasks.entries()) {
    if (task.id !== id) continue;
    tasks.splice(key, 1);
    updateTasks(tasks);
    return tasks;
  }
}
