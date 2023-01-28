import { useState } from 'react';

// Updating object state
export default function Example() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handlePointerMove = ({ clientX, clientY }) => {
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div onPointerMove={handlePointerMove} style={{ display: 'relative', width: '100vw', height: '100vh' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          position: 'absolute',
          left: '-10px',
          top: '-10px',
          backgroundColor: '#ff0000',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
