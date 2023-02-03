import AddTask from './AddTask';
import TaskList from './TaskList';
import TasksProvider from './TasksContext';

export default function TaskApp() {
  return (
    <div>
      <TasksProvider>
        <h2>My Tasks</h2>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
