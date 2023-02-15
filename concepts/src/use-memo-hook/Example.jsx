import { useCallback, useReducer, useState } from 'react';
import AddTask from './AddTask';
import Filter from './Filter';
import Theme from './Theme';
import TodoList from './TodoList';

export default function Example() {
  const [todos, dispatch] = useReducer(todosReducer, initalTasks);
  const [isDark, setIsDark] = useState(true);
  const [filter, setFilter] = useState('all');

  const handleAddTask = useCallback(text => {
    dispatch({ type: 'added', id: nextId++, text, done: false });
  }, []);

  const handleChangeTask = useCallback(changedTask => {
    dispatch({ type: 'changed', changedTask });
  }, []);

  const handleDeleteTask = useCallback(id => {
    dispatch({ type: 'deleted', id });
  }, []);

  const handleChangeTheme = useCallback(setIsDark);

  return (
    <div>
      <h2>Todo</h2>
      <Filter onChangeFilter={setFilter} />
      <Theme isDark={isDark} onChangeTheme={handleChangeTheme} />
      <AddTask onAddTask={handleAddTask} />
      <TodoList todos={todos} filter={filter} isDark={isDark} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

function todosReducer(todos, action) {
  switch (action.type) {
    case 'added': {
      return [...todos, { id: action.id, text: action.text, done: action.done }];
    }
    case 'changed': {
      const { changedTask } = action;
      return todos.map(task => {
        if (task.id !== changedTask.id) return task;
        return changedTask;
      });
    }
    case 'deleted': {
      return todos.filter(task => task.id !== action.id);
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
