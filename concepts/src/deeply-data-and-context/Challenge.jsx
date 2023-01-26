import { useState, useContext, createContext } from 'react';
import PLACES from './places.json';

const ImageSizeContext = createContext(100);

export default function App() {
  const defaultImageSize = useContext(ImageSizeContext);
  const [isLargeImage, setIsLargeImage] = useState(false);
  const imageSize = isLargeImage ? 150 : defaultImageSize;
  const handleChange = ({ target }) => setIsLargeImage(target.checked);

  return (
    <>
      <label>
        <input type="checkbox" value={isLargeImage} onChange={handleChange} />
        Use large images
      </label>
      <hr />
      <ImageSizeContext.Provider value={imageSize}>
        <List />
      </ImageSizeContext.Provider>
    </>
  );
}

function List() {
  const listItems = PLACES.map(place => {
    return <Place key={place.id} {...place} />;
  });

  return <ul style={{ listStyle: 'none', padding: '0' }}>{listItems}</ul>;
}

function Place({ name, description, imageId }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <PlaceImage imageId={imageId} description={description} />
      <p>
        <strong>{name}: </strong>
        {description}
      </p>
    </li>
  );
}

function PlaceImage({ imageId, description }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      referrerPolicy="no-referrer"
      src={`https://i.imgur.com/${imageId}.jpg`}
      alt={description}
      style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
    />
  );
}
