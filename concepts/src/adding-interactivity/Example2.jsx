export default function Example() {
  const [todos, setTodos] = useState(initialTodos);

  function handleChange(id, changes) {
    setTodos(todos.filter(item => (item.id === id ? { ...item, ...changes } : item)));
  }

  return (
    <ul>
      {todos.map(item => (
        <Item key={item.id} {...item} onChange={handleChange} />
      ))}
    </ul>
  );
}

function Item({ id, text, done, onChange }) {
  const [isDone, setIsDone] = useState(done);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isDone}
          onChange={e => {
            setIsDone(e.target.checked);
            onChange(id, { done: isDone });
          }}
        />
        {text}
      </label>
    </li>
  );
}

function initialTodos() {
  return [
    { id: 0, text: 'Breakfast', done: false },
    { id: 1, text: 'Study', done: true },
    { id: 2, text: 'Lunch', done: false },
  ];
}
