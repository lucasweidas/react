import { createContext, useContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case 'changed': {
      const { changedTask } = action;
      return tasks.map(task => (task.id === changedTask.id ? { ...changedTask } : task));
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Brush teeth', done: true },
  { id: 1, text: 'Study', done: true },
  { id: 2, text: 'Dinner', done: false },
];
