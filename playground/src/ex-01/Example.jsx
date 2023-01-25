import { useEffect, useState } from 'react';

export default function Example() {
  const [idCount, setIdCount] = useState(1);
  const [user, setUser] = useState(null);
  const handleIncrement = () => {
    if (idCount >= 12) return;
    setIdCount(idCount + 1);
  };
  const handleDecrement = () => {
    if (idCount <= 1) return;
    setIdCount(idCount - 1);
  };
  useEffect(() => {
    fetchUser(idCount, setUser);
  }, [idCount, setUser]);

  return (
    <div>
      {!user ? <div>Loading...</div> : <User {...user} />}
      <button onClick={handleDecrement} style={{ opacity: idCount > 1 ? '1' : '0.5' }}>
        Previous User
      </button>
      <button onClick={handleIncrement} style={{ opacity: idCount < 12 ? '1' : '0.5' }}>
        Next User
      </button>
    </div>
  );
}

function User({ avatar, first_name, last_name, email }) {
  return (
    <div>
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      <p>Name: {`${first_name} ${last_name}`}</p>
      <p>Email: {email}</p>
    </div>
  );
}

async function fetchUser(id, setUser) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const result = await response.json();
    setUser(result.data);
  } catch (error) {
    console.log(error);
  }
}
