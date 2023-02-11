import { useState } from 'react';

export default function Example() {
  const firstName = useInput('Lucas');
  const lastName = useInput();

  return (
    <div>
      <label>
        First name:
        <input type="text" {...firstName} />
      </label>
      <label>
        Last name:
        <input type="text" value={lastName.value} onChange={lastName.onChange} />
      </label>
      <p>
        Hello,{' '}
        <strong>
          {firstName.value} {lastName.value}
        </strong>
      </p>
    </div>
  );
}

function useInput(initialValue = '') {
  const [text, setText] = useState(initialValue);

  function handleChange({ target }) {
    setText(target.value);
  }

  return {
    value: text,
    onChange: handleChange,
  };
}
