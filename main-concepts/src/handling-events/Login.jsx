import { useState } from 'react';

export function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div>{isLoggedIn ? <Logged setIsLoggedIn={setIsLoggedIn} username={username} /> : <Form setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}</div>
  );
}

export function Form({ setIsLoggedIn, setUsername }) {
  const handleSubmit = e => {
    e.preventDefault();
    const username = document.querySelector('#username');
    setUsername(username.value);
    setIsLoggedIn(true);
  };
  const [inputType, setInputType] = useState('password');
  const togglePasswordVisibility = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.5rem', marginInline: 'auto' }}>
      <InputWrapper type="text" name="username" id="username" label="Username" />
      <InputWrapper type={inputType} name="password" id="password" label="Password" />
      <div style={{ justifySelf: 'flex-start' }}>
        <input type="checkbox" id="show-password" onChange={togglePasswordVisibility} />
        <label htmlFor="show-password">Show password</label>
      </div>
      <button type="submit" id="log-in">
        Sign In
      </button>
    </form>
  );
}

function InputWrapper({ type, name, id, label }) {
  return (
    <div style={{ display: 'grid', justifyItems: 'flex-start' }}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} style={{ width: '100%', padding: '0.5rem' }} />
    </div>
  );
}

function Logged({ setIsLoggedIn, username }) {
  const closeLoggedScreen = () => setIsLoggedIn(false);

  return (
    <div>
      <button id="log-out" onClick={closeLoggedScreen}>
        <i className="fa-solid fa-right-from-bracket"></i>
      </button>
      <h2>Welcome back, {username}</h2>
    </div>
  );
}
