import { useState } from 'react';

export default function Text() {
  const [text, setText] = useState('');
  const changeText = ({ target }) => setText(target.value);

  const [isTextVisible, setTextVisibility] = useState(true);
  const changeTextVisibility = () => setTextVisibility(!isTextVisible);

  const [color, setTextColor] = useState('#000000');
  const changeTextColor = ({ target }) => setTextColor(target.value);

  return (
    <div>
      <div>
        <textarea name="text" id="text" cols="30" rows="10" onInput={changeText} style={{ fontSize: '1rem' }}></textarea>
      </div>
      <button onClick={changeTextVisibility}>Show/Hide Text</button>
      <label htmlFor="color" style={{ marginInlineStart: '1rem' }}>
        Text color:
        <input type="color" name="color" id="color" onChange={changeTextColor} />
      </label>
      {isTextVisible && <p style={{ color, fontSize: '1.5rem' }}>{text}</p>}
    </div>
  );
}
