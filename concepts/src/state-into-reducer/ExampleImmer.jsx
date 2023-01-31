import { useImmerReducer } from 'use-immer';
import AddTask from './AddTask';
import TodoList from './TodoList';

// useImmerReducer takes two arguments: the initial state and the reducer function
// And it returns: a stateful value and a dispatch function
export default function Example() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initalTasks);

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

// With useImmerReducer it's possible to mutate within the reducer function with the draft property
function tasksReducer(draft, action) {
  switch (action.type) {
    case 'added': {
      draft.push({ id: action.id, text: action.text, done: action.done });
      break;
    }
    case 'changed': {
      const { changedTask } = action;
      const index = draft.findIndex(task => task.id === changedTask.id);
      draft[index] = changedTask;
      break;
    }
    case 'deleted': {
      const index = draft.findIndex(task => task.id === action.id);
      draft.splice(index, 1);
      break;
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
