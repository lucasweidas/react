import { useRef } from 'react';

export default function Example() {
  const imagesRef = useRef(null);

  return (
    <div>
      <button>Next</button>
    </div>
  );
}

function List({ getMap }) {
  return (
    <ul>
      {catList.map(cat => (
        <li
          key={cat.name}
          ref={node => {
            const map = getMap();
            if (node) {
              map.set(cat.name, node);
            } else {
              map.delete(cat.name);
            }
          }}
        >
          <img src={cat.imageUrl} alt={cat.name} />
        </li>
      ))}
    </ul>
  );
}

const catList = [
  { name: 'Juli', imageUrl: 'https://placekitten.com/250/200?image=0' },
  { name: 'Tom', imageUrl: 'https://placekitten.com/250/200?image=1' },
  { name: 'Maru', imageUrl: 'https://placekitten.com/250/200?image=2' },
  { name: 'Bob', imageUrl: 'https://placekitten.com/250/200?image=3' },
  { name: 'Lion', imageUrl: 'https://placekitten.com/250/200?image=4' },
  { name: 'Sam', imageUrl: 'https://placekitten.com/250/200?image=5' },
  { name: 'Nina', imageUrl: 'https://placekitten.com/250/200?image=6' },
  { name: 'Toby', imageUrl: 'https://placekitten.com/250/200?image=7' },
];
