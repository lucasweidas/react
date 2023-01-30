import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <h2>Something awesome</h2>
      <Panel title="Hello" isActive={activeIndex === 0} onClick={() => setActiveIndex(0)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ratione magni vero, ducimus nemo non sequi inventore expedita exercitationem culpa
        temporibus.
      </Panel>
      <Panel title="World" isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ratione magni vero.
      </Panel>
    </div>
  );
}

function Panel({ title, children, isActive, onClick }) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onClick}>Show more</button>}
    </section>
  );
}
