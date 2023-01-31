import { useReducer } from 'react';
import AddTask from './AddTask';
import TodoList from './TodoList';

// useReducer takes two arguments: the initial state and the reducer function
// And it returns: a stateful value and a dispatch function
export default function Example() {
  const [tasks, dispatch] = useReducer(tasksReducer, initalTasks);

  function handleAddTask(text) {
    dispatch({ type: 'added', id: nextId++, text, done: false });
  }

  function handleChangeTask(changedTask) {
    dispatch({ type: 'changed', changedTask });
  }

  function handleDeleteTask(id) {
    dispatch({ type: 'deleted', id });
  }

  return (
    <div>
      <h2>Todo</h2>
      <AddTask onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

// It's a convention to use switch statement inside a reducer function
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, { id: action.id, text: action.text, done: action.done }];
    }
    case 'changed': {
      const { changedTask } = action;
      return tasks.map(task => {
        if (task.id !== changedTask.id) return task;
        return changedTask;
      });
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id);
    }
    default: {
      throw Error('Unkown action type: ' + action.type);
    }
  }
}

let nextId = 3;
const initalTasks = [
  { id: 0, text: 'Brush teeth', done: true },
  { id: 1, text: 'Breakfast', done: false },
  { id: 2, text: 'Study', done: false },
];
