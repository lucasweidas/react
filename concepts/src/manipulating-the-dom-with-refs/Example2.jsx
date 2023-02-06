import { forwardRef, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import './Example2.css';

export default function Example() {
  const [imageIndex, setImageIndex] = useState(0);
  const imagesRef = useRef(null);

  function getImages() {
    if (!imagesRef.current) {
      imagesRef.current = new Map();
    }
    return imagesRef.current;
  }

  function handleClick({ target }) {
    let nextIndex;

    if (target.id === 'button-previous') {
      nextIndex = imageIndex === 0 ? catList.length - 1 : imageIndex - 1;
    } else if (target.id === 'button-next') {
      nextIndex = imageIndex === catList.length - 1 ? 0 : imageIndex + 1;
    }

    flushSync(() => {
      setImageIndex(nextIndex);
    });

    const images = getImages();
    const nextImage = images.get(nextIndex);
    nextImage.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <div>
      <nav>
        <button onClick={handleClick} id="button-previous">
          Previous
        </button>
        <button onClick={handleClick} id="button-next">
          Next
        </button>
      </nav>
      <div className="container">
        <ul className="list">
          {catList.map(cat => (
            <CatImage
              key={cat.id}
              id={cat.id}
              imageUrl={cat.imageUrl}
              isActive={imageIndex === cat.id}
              ref={node => {
                const map = new getImages();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

const CatImage = forwardRef(({ id, imageUrl, isActive }, ref) => {
  return (
    <li ref={ref} className={isActive ? 'active' : null}>
      <img src={imageUrl} alt={`Cat #${id}`} />
    </li>
  );
});

const catList = [];
for (let i = 0; i < 17; i++) {
  catList.push({
    id: i,
    imageUrl: `https://placekitten.com/250/200?image=${i}`,
  });
}
