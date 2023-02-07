import { useEffect, useRef, useState } from 'react';

export default function Example() {
  const [status, setStatus] = useState('disconnected');
  const [username, setUsername] = useState('');

  return (
    <div>
      {status === 'disconnected' && (
        <Login
          username={username}
          onUsernameChange={value => setUsername(value)}
          onLogin={() => {
            setStatus('connecting');
            setTimeout(() => setStatus('connected'), 500);
          }}
        />
      )}
      {status === 'connecting' && <p>Connecting...</p>}
      {status === 'connected' && (
        <Dashboard
          username={username}
          onLogout={() => {
            setUsername('');
            setStatus('disconnecting');
            setTimeout(() => setStatus('disconnected'), 500);
          }}
        />
      )}
      {status === 'disconnecting' && <p>Disconnecting...</p>}
    </div>
  );
}

function Login({ onLogin, username, onUsernameChange }) {
  return (
    <div>
      <input type="text" value={username} onChange={({ target }) => onUsernameChange(target.value)} />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function Dashboard({ username, onLogout }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const connection = createConnection();
    const dialog = dialogRef.current;
    connection.connect();
    dialog.showModal();

    return () => {
      connection.disconnect();
      dialog.close();
    };
  }, []);

  return (
    <dialog ref={dialogRef}>
      <p>Welcome back, {username}</p>
      <button onClick={onLogout}>Logout</button>
    </dialog>
  );
}

function createConnection() {
  return {
    connect() {
      console.log('✅ Connected...');
    },
    disconnect() {
      console.log('❌ Disconnected.');
    },
  };
}
