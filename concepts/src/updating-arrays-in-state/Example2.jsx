import { useState } from 'react';

export default function Example() {
  const [shapes, setShapes] = useState([
    { id: 0, type: 'circle', x: 50, y: 50 },
    { id: 1, type: 'square', x: 150, y: 50 },
    { id: 2, type: 'circle', x: 250, y: 50 },
  ]);
  const handleClick = ({ target }) => {
    setShapes(
      shapes.map(shape => {
        shape.y += shape.type === target.name ? 50 : 0;
        return shape;
      })
    );
  };

  return (
    <div>
      <button name="circle" onClick={handleClick}>
        Move circles down
      </button>
      <button name="square" onClick={handleClick}>
        Move square down
      </button>
      <div style={{ position: 'relative' }}>
        {shapes.map(({ id, type, x, y }) => {
          return <Shape key={id} type={type} x={x} y={y} />;
        })}
      </div>
    </div>
  );
}

function Shape({ x, y, type }) {
  return (
    <div
      style={{
        width: 25,
        height: 25,
        position: 'absolute',
        backgroundColor: 'blueviolet',
        transform: `translate(${x}px, ${y}px)`,
        borderRadius: type === 'circle' ? '50%' : 'none',
      }}
    ></div>
  );
}
