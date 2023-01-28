import { useState } from 'react';

let idCount = 0;

export default function Example() {
  const [fruit, setFriut] = useState('');
  const [fruitList, setFruitList] = useState([]);
  const handleChange = ({ target }) => setFriut(target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setFriut('');
    setFruitList([...fruitList, { id: idCount++, fruit }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Favorite fruits:
          <input type="text" value={fruit} onChange={handleChange} />
          <button type="submit">Add</button>
        </label>
      </form>
      <ul>
        {fruitList.map(({ id, fruit }) => (
          <li key={id}>
            <span>{fruit}</span>
            <button
              onClick={() => {
                setFruitList(fruitList.filter(fruit => fruit.id !== id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
