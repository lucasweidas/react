import { memo, useCallback, useState } from 'react';

export default function Example() {
  const [isDark, setIsDark] = useState(true);

  function handleThemeChange({ target }) {
    setIsDark(target.checked);
    document.documentElement.classList.toggle('light');
  }

  const sendMessage = useCallback((email, message) => {
    console.log(`message "${message}" sent to "${email}"`);
  }, []);

  return (
    <div>
      <label>
        <input type="checkbox" checked={isDark} onChange={handleThemeChange} />
        Dark mode
      </label>
      <Form onSubmit={sendMessage} />
    </div>
  );
}

const Form = memo(function Form({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(email, message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={({ target }) => setMessage(target.value)}></textarea>
      </label>
      <button type="submit">Send message</button>
    </form>
  );
});
