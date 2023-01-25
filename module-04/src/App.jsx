import './App.scss';
import { useState } from 'react';

let idCounter = 0;
const todoList = new Map();

function App() {
  const [listItems, setListItems] = useState([]);
  const changeListItems = () => {
    setListItems(
      [...todoList.entries()].map(([key, value]) => {
        return <Task taskName={value} id={key} />;
      })
    );
  };
  const handleSubmit = event => {
    event.preventDefault();
    const input = document.querySelector('#input-add');
    todoList.set(idCounter, input.value);
    changeListItems();
    idCounter++;
  };
  const removeTask = ({ target }) => {
    todoList.delete(+target.id);
    changeListItems();
  };

  const Task = ({ taskName, id }) => {
    const [isTaskCompleted, setTaskCompleted] = useState(false);
    const toggleCompletion = ({ target }) => {
      target.classList.toggle('completed');
      setTaskCompleted(!isTaskCompleted);
    };

    return (
      <div className="flex-container">
        <p onClick={toggleCompletion}>{taskName}</p>
        <button onClick={removeTask} id={id}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    );
  };

  return (
    <div>
      <form className="flex-container" onSubmit={handleSubmit}>
        <input type="text" id="input-add" />
        <button type="submit">Add Task</button>
      </form>
      <div className="list">{...listItems}</div>
    </div>
  );
}

export default App;

{
  /* <label htmlFor={`task-${id}`}>{taskName}</label>
      <input type="checkbox" id={`task-${id}`} /> */
}
