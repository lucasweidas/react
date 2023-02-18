import { useState, useTransition } from 'react';

const initialTodos = getTodos();

export default function Example() {
  const [filter, setFilter] = useState('');
  const [isPending, startTransition] = useTransition();

  const filteredTodos = filterTodos(filter);

  function handleChange({ target }) {
    startTransition(() => {
      setFilter(target.value);
    });
  }

  return (
    <div>
      <FilterInput onChange={handleChange} />
      {isPending ? <p>Loading...</p> : <List todos={filteredTodos} />}
    </div>
  );
}

function FilterInput({ onChange }) {
  return <input type="text" onChange={onChange} />;
}

function List({ todos }) {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <Item key={id} text={text} />
      ))}
    </ul>
  );
}

function Item({ text }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 2);
  return <li>{text}</li>;
}

function getTodos() {
  const todos = [];
  for (let i = 0; i < 500; i++) {
    todos.push({ id: i, text: `todo ${i + 1}` });
  }
  return todos;
}

function filterTodos(filter) {
  if (filter === '') {
    return [...initialTodos];
  }
  return initialTodos.filter(({ text }) => text.includes(filter));
}
