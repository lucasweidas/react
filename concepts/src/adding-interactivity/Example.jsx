import sculptures from './sculptures.json';
import { useState } from 'react';

const MAX_INDEX = sculptures.length - 1;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const sculpture = sculptures[index];
  const handleClick = ({ target }) => {
    if (target.id === 'next') {
      setIndex(index === MAX_INDEX ? MAX_INDEX : index + 1);
    } else {
      setIndex(index === 0 ? 0 : index - 1);
    }
  };

  return (
    <div>
      <Button id="previous" onClick={handleClick}>
        Previous
      </Button>
      <Button id="next" onClick={handleClick}>
        Next
      </Button>
      <Sculpture {...sculpture}>
        <p>
          ({index + 1} of {MAX_INDEX + 1})
        </p>
      </Sculpture>
    </div>
  );
}

function Button({ onClick, id, children }) {
  return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
}

function Sculpture({ name, artist, url, alt, description, children }) {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => setShowMore(!showMore);

  return (
    <div>
      <h2>
        <em>{name}</em> by {artist}
      </h2>
      {children}
      <Button onClick={handleClick}>Show More</Button>
      {showMore && <p>{description}</p>}
      <img referrerPolicy="no-referrer" src={url} alt={alt} style={{ display: 'block' }} />
    </div>
  );
}
