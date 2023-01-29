import { useState } from 'react';
import { useImmer } from 'use-immer';

const initalList = [
  { id: 0, task: 'Brush teeth', done: true },
  { id: 1, task: 'Breakfast', done: false },
  { id: 2, task: 'Lunch', done: false },
];

export default function Example() {
  const [myList, setMyList] = useState(initalList);
  const [yourList, updateYourList] = useImmer(initalList);

  return (
    <div>
      <h2>Todo List</h2>
      <h3>My list</h3>
      <List list={myList} setList={setMyList} />
      <h3>Your list</h3>
      <List list={yourList} updateList={updateYourList} />
    </div>
  );
}

function List({ list, setList, updateList }) {
  const handleChange = (taskId, isDone) => {
    // If useState
    if (setList) {
      const nextList = list.map(item => {
        return item.id !== taskId ? item : { ...item, done: isDone };
      });
      setList(nextList);
      return;
    }
    // If useImmer
    updateList(draft => {
      const task = draft.find(item => item.id === taskId);
      task.done = isDone;
    });
  };

  return (
    <ul>
      {list.map(({ id, task, done }) => {
        return (
          <li key={id}>
            <label>
              <input
                type="checkbox"
                checked={done}
                onChange={({ target }) => {
                  handleChange(id, target.checked);
                }}
              />
              {task}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
